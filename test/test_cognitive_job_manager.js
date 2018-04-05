let Pandora = artifacts.require("Pandora")
let Dataset = artifacts.require("Dataset")
let Kernel = artifacts.require("Kernel")
let WorkerNode = artifacts.require("WorkerNode")
let CognitiveJob = artifacts.require("CognitiveJob")


contract('Pandora', accounts => {

  let pandora
  let pandoraAddress
  let pandoraAddress1
  let pandoraAddress2
  let workerNode
  let workerNode1
  let workerNode2
  let workerInstance
  let workerInstance1
  let workerInstance2
  const workerOwner = accounts[2]
  const workerOwner1 = accounts[3]
  const workerOwner2 = accounts[4]
  const client = accounts[5]

  before('setup', async () => {
    pandora = await Pandora.deployed()

    await pandora.whitelistWorkerOwner(workerOwner)
    workerNode = await pandora.createWorkerNode({from: workerOwner})

    const idleWorkerAddress = await pandora.workerNodes.call(0)
    console.log(idleWorkerAddress, 'worker node')

    workerInstance = await WorkerNode.at(idleWorkerAddress)
    let workerAliveResult = await workerInstance.alive({from: workerOwner})
  })

  it('Should not create job if # of idle workers < number of batches and put it to queue', async () => {

    let numberOfBatches = 2
    let testDataset = await Dataset.new('', 1, 0, numberOfBatches, 0)
    let testKernel = await Kernel.new('', 1, 0, 0)
    let estimatedCode = 0

    let result = await pandora.createCognitiveJob(testKernel.address, testDataset.address)

    let logSuccess = result.logs.filter(l => l.event === 'CognitiveJobCreated')[0]
    let logFailure = result.logs.filter(l => l.event === 'CognitiveJobCreateFailed')[0]
    let logEntries = result.logs.length

    console.log(logFailure, "failure")
    console.log(logSuccess, "success")
    console.log(logEntries, "entries")

    assert.equal(result.logs[0].args.resultCode, estimatedCode, "result code in event should match RESULT_CODE_ADD_TO_QUEUE" )
    assert.equal(logEntries, 1, "should be fired only 1 event")
    assert.isOk(logFailure, "should be fired failed event")
    assert.isNotOk(logSuccess, "should not be fired successful creation event")
  })

  it('Should create job if number of idle workers >= number of batches in dataset', async () => {

    let numberOfBatches = 1
    let testDataset = await Dataset.new('', 1, 0, numberOfBatches, 0)
    let testKernel = await Kernel.new('', 1, 0, 0)
    let estimatedCode = 1

    let result = await pandora.createCognitiveJob(testKernel.address, testDataset.address)

    let logSuccess = result.logs.filter(l => l.event === 'CognitiveJobCreated')[0]
    let logFailure = result.logs.filter(l => l.event === 'CognitiveJobCreateFailed')[0]
    let logEntries = result.logs.length

    console.log(logFailure, "failure")
    console.log(logSuccess, "success")
    console.log(logEntries, "entries")

    let activeJob = await workerInstance.activeJob.call()

    let workerState = await workerInstance.currentState.call()

    assert.equal(workerState.toNumber(), 3, "worker state should be 'assigned' (3)")
    assert.notEqual(activeJob, '0x0000000000000000000000000000000000000000', "should set activeJob to worker node")
    assert.equal(result.logs[1].args.resultCode, estimatedCode, "result code in event should match RESULT_CODE_JOB_CREATED" )
    assert.equal(logEntries, 2, "should be fired only 2 events")
    assert.isNotOk(logFailure, "should not be fired failed event")
    assert.isOk(logSuccess, "should be fired successful creation event")
  })

  it('Congitive job should be successfully completed after computation', async () => {

    //preparing to finish job on worker node #1

    let activeJob = await workerInstance.activeJob.call()
    console.log(activeJob, "activeJob")

    let workerState = await workerInstance.currentState.call()
    console.log(workerState.toNumber(), "workerState")

    let preparingValidationResult = await workerInstance.acceptAssignment({from: workerOwner})
//    console.log(preparingValidationResult)

    let validatingDataResult = await workerInstance.processToDataValidation({from: workerOwner})
//    console.log(validatingDataResult)

    let readyForComputingResult = await workerInstance.acceptValidData({from: workerOwner})
//    console.log(readyForComputingResult)

    let processToCognitionResult = await workerInstance.processToCognition({from: workerOwner})
//    console.log(processToCognitionResult)

    workerState = await workerInstance.currentState.call()
    console.log(workerState.toNumber(), "workerState")
    assert.equal(workerState.toNumber(), 7, "worker state should be 'computing' (7)")

    let completeResult = await workerInstance.provideResults('0x0', {from: workerOwner})
//    console.log(completeResult)

    let logEntries = completeResult.logs.length
    console.log(logEntries)

    workerState = await workerInstance.currentState.call()
    console.log(workerState.toNumber(), "workerState")

    let jobState = await CognitiveJob.at(activeJob).currentState.call()
    console.log(jobState.toNumber(), "Active job state")
    assert.equal(jobState.toNumber(), 7, "Cognitive job state should be 'Completed' (7)")
  })
})