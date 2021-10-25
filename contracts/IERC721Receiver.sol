pragma solidity ^0.8.0;

interface IERC721Receiver{
  //the function we are calling returns a bytes value, so we need to have this return bytes
  function onERC721Received(address operator, address from, uint tokenId, bytes calldata data) external returns(bytes4);

}
