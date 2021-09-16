pragma solidity ^0.8.0;

import "./IERC721.sol";
import "./Ownable.sol";

contract KittycontractNFT is IERC721, Ownable {

  event Birth(address _owner, uint256 _tokenID, uint256 momID, uint256 dadID, uint256 _genes);

  string public constant _tokenName = "WaterstoneKittys";
  string public constant _tokenSymbol = "WSK";

  mapping(address => uint256) balances;


  mapping(uint256 => address) ownerOfNFT;

  //NFT creation limit
  uint256 public constant gen0Limit = 10;

  //NFT Gen0 limit
  uint256 public gen0Counter;

  struct Kittys {
    uint256 genes;
    uint32 momID;
    uint32 dadID;
    uint64 birthTime;
    uint16 generation;
  }

  Kittys[] kittys;

  /**
   * @dev Returns the number of tokens in ``owner``'s account.
   */
  function balanceOf(address owner) external view override returns (uint256 balance){
    //we need it to return a balance of an owner --> mapping
    return balances[owner]; //need to create a 'balances' mapping
  }

  /*
   * @dev Returns the total number of tokens in circulation.
   */
  function totalSupply() public view override returns (uint256 total){
    return kittys.length;
  }

  /*
   * @dev Returns the name of the token.
   */
  function name() external view override returns (string memory tokenName){
    return _tokenName;
  }

  /*
   * @dev Returns the symbol of the token.
   */
  function symbol() external view override returns (string memory tokenSymbol){
    return _tokenSymbol;
  }

  /**
   * @dev Returns the owner of the `tokenId` token.
   *
   * Requirements:
   *
   * - `tokenId` must exist.
   */
  function ownerOf(uint256 tokenId) external view override returns (address owner){
    return ownerOfNFT[tokenId];
  }

  /* @dev Transfers `tokenId` token from `msg.sender` to `to`.
  *
  * Requirements:
  *
  * - `to` cannot be the zero address.
  * - `to` can not be the contract address.
  * - `tokenId` token must be owned by `msg.sender`.
  *
  * Emits a {Transfer} event.
  */
  function transfer(address _to, uint256 _tokenID) external override {
    require(_to != address(0), "ERC721: Transfer is to the 0 address!");
    require(_to != address(this), "ERC721: Transfer is not supported to this contract");
    require(owns(msg.sender, _tokenID));

    _transfer(msg.sender, _to, _tokenID);

  }

  function _transfer(address _from, address _to, uint256 _tokenID) internal {
    //increment balance of 'to' address + 1
    balances[_to] += 1;

    //Assign the NFT to the '_to' address
    ownerOfNFT[_tokenID] = _to;

    //if '_from' address is not the 0 address (aka not a newly minted coin being transferred)...
    //decrement the balance of the '_from' address by - 1
    if(_from != address(0)){
      balances[_from] -= 1;
    }

    emit Transfer(_from, _to, _tokenID);
  }

  function owns(address _from, uint256 tokenID) internal view returns(bool){
    return ownerOfNFT[tokenID] == _from;
  }

  function createKittyGen0(uint256 _genes) public onlyOwner returns(uint256) {
    //takes the genes that you send in from front send
    //creates a new kitty for us with those specific genes
    require(gen0Counter < gen0Limit);

    gen0Counter++;
    //use _createKitty()

    return _createKitty(0, 0, 0, _genes, address(this));
  }

  function _createKitty(uint256 _momID, uint256 _dadID, uint256 _generation, uint256 _genes,address _owner) internal returns(uint256){

      Kittys memory _kitty = Kittys({

        momID: uint32(_momID),
        dadID: uint32(_dadID),
        generation: uint16(_generation),
        genes: _genes,
        birthTime: uint64(block.timestamp)
        });

      kittys.push(_kitty);

      uint256 newKittenID = kittys.length - 1;

      _transfer(address(0), _owner, newKittenID);

      emit Birth(_owner, newKittenID, _momID, _dadID, _genes);

      return newKittenID;

  }

  function getKitty(uint256 tokenID) external view returns(uint256 genes, uint256 momID, uint256 dadID, uint256 birthTime, uint256 generation){

    Kittys[] storage _kittys = kittys[tokenID];

      genes = _kittys.genes;
      momID =  uint256(_kittys.momID);
      dadID =  uint256(_kittys.dadID);
      birthTime = uint256(_kittys.birthTime);
      generation = uint256(_kittys.generation);
  }

}
