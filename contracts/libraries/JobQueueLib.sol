pragma solidity ^0.4.23;

import "../jobs/IComputingJob.sol";
import "../entities/IKernel.sol";
import "../entities/IDataset.sol";

library JobQueueLib {

    // implementation with "unlimited" array

    struct Queue {
        QueuedJob[] jobArray;
        uint256[] deposits;
        uint256 cursorPosition;
    }

    struct QueuedJob {
        IKernel kernel;
        IDataset dataset;
        address client;
        uint256 complexity;
        bytes32 description;
    }

    /// @dev Returns depth of queue
    function queueDepth(
        Queue storage _queue
    )
    internal
    view
    returns(uint depth) {
        depth = _queue.jobArray.length - _queue.cursorPosition;
    }

    /// @dev Inserts the specified element at the tail of the queue
    function put(
        Queue storage _queue,
        IKernel _kernel,
        IDataset _dataset,
        uint256 _value,
        address _client,
        uint256 _complexity,
        bytes32 _description
    )
    internal
    returns(uint) {
        require((_queue.jobArray.length + 1) > _queue.jobArray.length); // exceeded 2^256 push requests
        _queue.jobArray.push(QueuedJob(_kernel, _dataset, _client, _complexity, _description));
        _queue.deposits.push(_value);
        return queueDepth(_queue);
    }

    /// @notice Unsafe function -  should check queue depth before call this method with queueDepth()
    /// Should be called BEFORE call requestJob(),
    /// @dev Compare number of batches in first element with number of idle workers
    function compareFirstElementToIdleWorkers(
        Queue storage _queue,
        uint256 numberIdleWorkers
    )
    internal
    view
    returns(bool) {
        QueuedJob memory firstElement;
        (firstElement,) = peek(_queue);
        return firstElement.dataset.batchesCount() <= numberIdleWorkers;
    }

    /// @notice Unsafe function - should check queue depth before call this method with queueDepth()
    /// @dev Retrieves and removes the head of the queue
    function requestJob(
        Queue storage _queue
    )
    internal
    returns(QueuedJob cognitiveJob, uint256 value) {
        (cognitiveJob, value) = peek(_queue); // write return values to memory variable
        remove(_queue);
        return (cognitiveJob, value);
    }

    /// @dev Retrieves the head of the queue
    function peek(
        Queue storage _queue
    )
    private
    view
    returns(QueuedJob, uint value) {
        return (_queue.jobArray[_queue.cursorPosition], _queue.deposits[_queue.cursorPosition]);
    }

    /// @dev Removes the head of the queue
    function remove(
        Queue storage _queue
    )
    private {
        _queue.cursorPosition++; // move cursor to next element
        delete _queue.jobArray[_queue.cursorPosition - 1]; // delete element from arrays
        delete _queue.deposits[_queue.cursorPosition - 1];
    }
}