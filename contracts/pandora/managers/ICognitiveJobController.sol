pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";


// Contract implement main cognitive job functionality
contract ICognitiveJobController is Ownable{

    /*******************************************************************************************************************
     * ## Storage
     */

    /// ### Public and external

    function getCognitiveJobDetails(bytes32 _jobId)
    public
    view
    returns (
        address kernel,
        address dataset,
        uint256 complexity,
        bytes32 description,
        address[] activeWorkers
    );

    function createCognitiveJob (
        address _kernel,
        address _dataset,
        address[] _assignedWorkers,
        uint256 _complexity,
        bytes32 _description
    )
    external
    returns(
        bytes32 id
    );

    /// @dev Could be called from manager with two types of response - Assignment and DataValidation
    function onWorkerResponse(
        bytes32 _jobId,
        address _workerId,
        uint8 _responseType,
        bool _response)
    external
    returns (bool result);

    //should be called for responseTimestamp refresh after actual progress change in workerNode
    function commitProgress(
        bytes32 _jobId,
        address _workerId,
        uint8 _percent)
    external;

    /// @notice should be called with provided results
    function completeWork(
        bytes32 _jobId,
        address _workerId,
        bytes _ipfsResults)
    external
    returns (
        bool result // true - if all workers have submitted result
    );

    /******************************************************************************************************************
     * ## Events
     */

    event JobStateChanged(bytes32 indexed jobId, uint8 oldState, uint8 newState);
    event WorkersUpdated(bytes32 indexed jobId);
    event WorkersNotFound(bytes32 indexed jobId);
    event DataValidationStarted(bytes32 indexed jobId);
    event DataValidationFailed(bytes32 indexed jobId);
    event CognitionStarted(bytes32 indexed jobId);
    event CognitionProgressed(bytes32 indexed jobId, uint8 precent);
    event CognitionCompleted(bytes32 indexed jobId, bool partialResult);
}
