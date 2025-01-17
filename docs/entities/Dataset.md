# Dataset


**Execution cost**: No bound available

**Deployment cost**: less than 236200 gas

**Combined cost**: No bound available

## Constructor



Params:

1. **_ipfsAddress** *of type `bytes`*
2. **_dataDim** *of type `uint256`*
3. **_samplesCount** *of type `uint256`*
4. **_batchesCount** *of type `uint8`*
5. **_initialPrice** *of type `uint256`*
6. **_metadata** *of type `bytes32`*
7. **_description** *of type `bytes32`*

## Events
### OwnershipTransferred(address,address)


**Execution cost**: No bound available


Params:

1. **previousOwner** *of type `address`*
2. **newOwner** *of type `address`*

--- 
### PriceUpdated(uint256,uint256)


**Execution cost**: No bound available


Params:

1. **oldPrice** *of type `uint256`*
2. **newPrice** *of type `uint256`*


## Methods
### updatePrice(uint256)


**Execution cost**: less than 22110 gas


Params:

1. **_newPrice** *of type `uint256`*


--- 
### metadata()


**Execution cost**: less than 384 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `bytes32`*

--- 
### description()


**Execution cost**: less than 428 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `bytes32`*

--- 
### ipfsAddress()


**Execution cost**: No bound available

**Attributes**: constant



Returns:


1. **output_0** *of type `bytes`*

--- 
### batchesCount()


**Execution cost**: less than 487 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `uint8`*

--- 
### dataDim()


**Execution cost**: less than 560 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `uint256`*

--- 
### currentPrice()


**Execution cost**: less than 538 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `uint256`*

--- 
### owner()


**Execution cost**: less than 669 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `address`*

--- 
### samplesCount()


**Execution cost**: less than 450 gas

**Attributes**: constant



Returns:


1. **output_0** *of type `uint256`*

--- 
### transferOwnership(address)
>
> Allows the current owner to transfer control of the contract to a newOwner.


**Execution cost**: less than 22951 gas


Params:

1. **newOwner** *of type `address`*

    > The address to transfer ownership to.



--- 
### withdrawBalance()
>
>Withdraws full balance to the owner account. Can be called only by the owner of the contract.


**Execution cost**: No bound available




[Back to the top ↑](#dataset)
