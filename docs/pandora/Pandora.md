# Pandora
> Pandora Smart Contract
>
> Author: "Dr Maxim Orlovsky" <orlovsky@pandora.foundation>


**Execution cost**: No bound available

**Deployment cost**: less than 2120400 gas

**Combined cost**: No bound available

## Constructor



Params:

1. **_jobFactory** *of type `address`*
2. **_nodeFactory** *of type `address`*
3. **_reputation** *of type `address`*

## Events
### Approval(address,address,uint256)


**Execution cost**: No bound available


Params:

1. **owner** *of type `address`*
2. **spender** *of type `address`*
3. **value** *of type `uint256`*

--- 
### CognitiveJobCreateFailed(address,uint256)


**Execution cost**: No bound available


Params:

1. **cognitiveJob** *of type `address`*
2. **resultCode** *of type `uint256`*

--- 
### CognitiveJobCreated(address,uint256)


**Execution cost**: No bound available


Params:

1. **cognitiveJob** *of type `address`*
2. **resultCode** *of type `uint256`*

--- 
### CognitiveJobCreated(address)


**Execution cost**: No bound available


Params:

1. **cognitiveJob** *of type `address`*

--- 
### OwnershipTransferred(address,address)


**Execution cost**: No bound available


Params:

1. **previousOwner** *of type `address`*
2. **newOwner** *of type `address`*

--- 
### Transfer(address,address,uint256)


**Execution cost**: No bound available


Params:

1. **from** *of type `address`*
2. **to** *of type `address`*
3. **value** *of type `uint256`*

--- 
### WorkerNodeCreated(address)


**Execution cost**: No bound available


Params:

1. **workerNode** *of type `address`*

--- 
### WorkerNodeDestroyed(address)


**Execution cost**: No bound available


Params:

1. **workerNode** *of type `address`*


## Methods
### penaltizeWorkerNode(address,uint8)


**Execution cost**: less than 921 gas


Params:

1. **_guiltyWorker** *of type `address`*
2. **_reason** *of type `uint8`*


--- 
### name()


**Execution cost**: No bound available

**Attributes**: constant



Returns:


1. **output_0** *of type `string`*

--- 
### isActiveJob(address)
>
>### Public and externalTest whether the given `job` is registered as an active job by the main Pandora contract
>
> Used to test if some given job contract is a contract created by the Pandora and is listed by it as an active contract


**Execution cost**: less than 1641 gas

**Attributes**: constant


Params:

1. **_job** *of type `address`*

Returns:


1. **output_0** *of type `bool`*

--- 
### createCognitiveJob(address,address)
>
>Creates and returns new cognitive job contract and starts actual cognitive work instantly
>
> Core function creating new cognitive job contract and returning it back to the caller


**Execution cost**: No bound available

**Attributes**: payable


Params:

1. **_kernel** *of type `address`*
2. **_dataset** *of type `address`*

Returns:


1. **o_cognitiveJob** *of type `address`*
2. **o_resultCode** *of type `uint8`*

--- 
### getRandomArray(uint256,uint256)


**Execution cost**: No bound available


Params:

1. **_arrayLength** *of type `uint256`*
2. **_numbersRange** *of type `uint256`*

Returns:


1. **o_result** *of type `uint256[]`*

--- 
### initialized()


**Execution cost**: less than 569 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `bool`*

--- 
### finishCognitiveJob()
>
>Can"t be called by the user, for internal use only
>
> Function must be called only by the master node running cognitive job. It completes the job, updates worker node back to `Idle` state (in smart contract) and removes job contract from the list of active contracts


**Execution cost**: No bound available




--- 
### allowance(address,address)
>
> Function to check the amount of tokens that an owner allowed to a spender.


**Execution cost**: less than 1453 gas

**Attributes**: constant


Params:

1. **_owner** *of type `address`*

    > address The address which owns the funds.

2. **_spender** *of type `address`*

    > address The address which will spend the funds.


Returns:

> A uint256 specifying the amount of tokens still available for the spender.

1. **output_0** *of type `uint256`*

--- 
### increaseApproval(address,uint256)
>
> Increase the amount of tokens that an owner allowed to a spender.   * approve should be called when allowed[_spender] == 0. To increment allowed value is better to use this function to avoid 2 calls (and wait until the first transaction is mined) From MonolithDAO Token.sol


**Execution cost**: No bound available


Params:

1. **_spender** *of type `address`*

    > The address which will spend the funds.

2. **_addedValue** *of type `uint256`*

    > The amount of tokens to increase the allowance by.


Returns:


1. **output_0** *of type `bool`*

--- 
### activeJobs(uint256)


**Execution cost**: less than 1098 gas

**Attributes**: constant


Params:

1. **param_0** *of type `uint256`*

Returns:


1. **output_0** *of type `address`*

--- 
### destroyWorkerNode(address)
>
>Removes worker from the workers list and destroys it. Can be called only by the worker node owner and only for the idle workers


**Execution cost**: No bound available


Params:

1. **_workerNode** *of type `address`*


--- 
### RESULT_CODE_JOB_CREATED()


**Execution cost**: less than 498 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `uint8`*

--- 
### INITIAL_SUPPLY()


**Execution cost**: less than 511 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `uint256`*

--- 
### decimals()


**Execution cost**: less than 533 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `uint256`*

--- 
### cognitiveJobFactory()


**Execution cost**: less than 908 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `address`*

--- 
### createWorkerNode()
>
>Creates, registers and returns a new worker node owned by the caller of the contract. Can be called only by the whitelisted node owner address.


**Execution cost**: No bound available



Returns:


1. **output_0** *of type `address`*

--- 
### activeJobsCount()
>
> Returns total count of active jobs


**Execution cost**: less than 1042 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `uint256`*

--- 
### jobAddresses(address)


**Execution cost**: less than 983 gas

**Attributes**: constant


Params:

1. **param_0** *of type `address`*

Returns:


1. **output_0** *of type `uint16`*

--- 
### approve(address,uint256)
>
> Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.   * Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729


**Execution cost**: less than 22417 gas


Params:

1. **_spender** *of type `address`*

    > The address which will spend the funds.

2. **_value** *of type `uint256`*

    > The amount of tokens to be spent.


Returns:


1. **output_0** *of type `bool`*

--- 
### decreaseApproval(address,uint256)
>
> Decrease the amount of tokens that an owner allowed to a spender.   * approve should be called when allowed[_spender] == 0. To decrement allowed value is better to use this function to avoid 2 calls (and wait until the first transaction is mined) From MonolithDAO Token.sol


**Execution cost**: No bound available


Params:

1. **_spender** *of type `address`*

    > The address which will spend the funds.

2. **_subtractedValue** *of type `uint256`*

    > The amount of tokens to decrease the allowance by.


Returns:


1. **output_0** *of type `bool`*

--- 
### RESULT_CODE_ADD_TO_QUEUE()


**Execution cost**: less than 784 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `uint8`*

--- 
### balanceOf(address)
>
> Gets the balance of the specified address.


**Execution cost**: less than 1134 gas

**Attributes**: constant


Params:

1. **_owner** *of type `address`*

    > The address to query the the balance of.


Returns:

> An uint256 representing the amount owned by the passed address.

1. **output_0** *of type `uint256`*

--- 
### blacklistWorkerOwner(address)
>
>Removes address from the whitelist of owners allowed to create WorkerNodes contracts
>
> Can be called only by the owner of Pandora contract


**Execution cost**: less than 21414 gas


Params:

1. **_workerOwner** *of type `address`*


--- 
### initialize()
>
>### InitializationFunction that checks the proper setup of class factories. May be called only once and only by Pandora contract owner.
>
> Function that checks the proper setup of class factories. May be called only once and only by Pandora contract owner.


**Execution cost**: No bound available




--- 
### workerNodes(uint256)


**Execution cost**: less than 1076 gas

**Attributes**: constant


Params:

1. **param_0** *of type `uint256`*

Returns:


1. **output_0** *of type `address`*

--- 
### workerAddresses(address)


**Execution cost**: less than 1401 gas

**Attributes**: constant


Params:

1. **param_0** *of type `address`*

Returns:


1. **output_0** *of type `uint16`*

--- 
### owner()


**Execution cost**: less than 1172 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `address`*

--- 
### symbol()


**Execution cost**: No bound available

**Attributes**: constant



Returns:


1. **output_0** *of type `string`*

--- 
### transfer(address,uint256)
>
> transfer token for a specified address


**Execution cost**: No bound available


Params:

1. **_to** *of type `address`*

    > The address to transfer to.

2. **_value** *of type `uint256`*

    > The amount to be transferred.


Returns:


1. **output_0** *of type `bool`*

--- 
### transferFrom(address,address,uint256)
>
> Transfer tokens from one address to another


**Execution cost**: No bound available


Params:

1. **_from** *of type `address`*

    > address The address which you want to send tokens from

2. **_to** *of type `address`*

    > address The address which you want to transfer to

3. **_value** *of type `uint256`*

    > uint256 the amount of tokens to be transferred


Returns:


1. **output_0** *of type `bool`*

--- 
### version()


**Execution cost**: less than 577 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `bytes32`*

--- 
### totalSupply()


**Execution cost**: less than 601 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `uint256`*

--- 
### whitelistWorkerOwner(address)
>
>### Public and externalAdds address to the whitelist of owners allowed to create WorkerNodes contracts
>
> Can be called only by the owner of Pandora contract


**Execution cost**: less than 21024 gas


Params:

1. **_workerOwner** *of type `address`*


--- 
### transferOwnership(address)
>
> Allows the current owner to transfer control of the contract to a newOwner.


**Execution cost**: less than 23589 gas


Params:

1. **newOwner** *of type `address`*

    > The address to transfer ownership to.



--- 
### workerNodeFactory()


**Execution cost**: less than 1370 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `address`*

--- 
### workerNodeOwners(address)


**Execution cost**: less than 1046 gas

**Attributes**: constant


Params:

1. **param_0** *of type `address`*

Returns:


1. **output_0** *of type `bool`*

--- 
### workerNodesCount()
>
>Returns count of registered worker nodes


**Execution cost**: less than 757 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `uint256`*

[Back to the top ↑](#pandora)
