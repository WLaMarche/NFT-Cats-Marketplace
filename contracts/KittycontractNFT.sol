pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "./IERC721.sol";
import "./Ownable.sol";
import "./IERC721Receiver.sol";

contract KittycontractNFT is IERC721, Ownable {

  event Birth(address _owner, uint256 _tokenID, uint256 momID, uint256 dadID, uint256 _genes);

  string public constant _tokenName = "WaterstoneKittys";
  string public constant _tokenSymbol = "WSK";

  //used in external func supportsInterface() for contract interoperability
  bytes4 private constant _INTERFACE_ID_ERC721 = 0x80ac58cd;
  bytes4 private constant _INTERFACE_ID_ERC165 = 0x01ffc9a7;

  //mapping of NFT balance for address
  mapping(address => uint256) balances;
  //mapping of specific NFT owned by address
  mapping(uint256 => address) ownerOfNFT;
  //mapping of NFT that gives approval access to another address
  mapping(uint256 => address) public nftApprovals;
  //owner address that grants full approval of assets to another addresses
  mapping(address => mapping(address => bool)) private operatorApproval;
  //approvalforAll[msg.sender][msg.receiver] = true;

  //NFT creation limit
  uint256 public constant gen0Limit = 10;

  //NFT Gen0 limit
  uint256 public gen0Counter;

  struct Kittys {
    address owner;
    uint256 genes;
    uint32 momID;
    uint32 dadID;
    uint16 generation;
  }

  Kittys[] kittys;

  //ERC721 standard func that allows other contracts to check to see if OUR contract supports specific ERC standards
  //INPUT a unique bytes4 hash (Ethereum sets these) to see if my contract returns true (supports) or false (does not support)
  function supportsInterface(bytes4 _interfaceID) external view returns(bool){
    if(_interfaceID == _INTERFACE_ID_ERC721 || _interfaceID == _INTERFACE_ID_ERC165){
      return true;
    }
    else{
      return false;
    }
  }

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
  function name() external pure override returns (string memory tokenName){
    return _tokenName;
  }

  /*
   * @dev Returns the symbol of the token.
   */
  function symbol() external pure override returns (string memory tokenSymbol){
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

  //breed momNFT & dadNFT together --> first 8 integers come from dad, last 8 integers come from mom
  function breedKittys(uint256 _momID, uint256 _dadID) public returns(uint256){
    //check that msg.sender has ownership of _mom & _dad
    require(owns(msg.sender, _momID));
    require(owns(msg.sender, _dadID));

    //call getKitty() to retrieve info about tokenID
    (uint256 dadGenes,,,, uint256 dadGeneration) = getKitty(_dadID);
    (uint256 momGenes,,,, uint256 momGeneration) = getKitty(_momID);
    //mix DNA
    uint256 kittenDNA = _mixDNA(momGenes, dadGenes);
    //figure out the generation (ie dad is Gen0, mom is Gen5)
    uint256 newGen = _findGen(momGeneration, dadGeneration);
    //create new cat with new properties, give it to msg.sender
    _createKitty(_momID, _dadID, newGen, kittenDNA, msg.sender);

  }

  function _findGen(uint256 _momGeneration, uint256 _dadGeneration) internal returns(uint256){
    uint256 kidGeneration;
    if(_dadGeneration > _momGeneration){
      kidGeneration = _dadGeneration + 1;
      kidGeneration = kidGeneration / 2;
    }
    if(_dadGeneration < _momGeneration){
      kidGeneration = _momGeneration + 1;
      kidGeneration = kidGeneration / 2;
    }
    else{
      kidGeneration = _momGeneration + 1;
    }
    return kidGeneration;
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
      delete nftApprovals[_tokenID];
    }

    emit Transfer(_from, _to, _tokenID);
  }

  function owns(address _from, uint256 tokenID) internal view returns(bool){
    return ownerOfNFT[tokenID] == _from;
  }

  function createKittyGen0(uint256 _genes) public returns(uint256){
    //takes the genes that you send in from front send
    //creates a new kitty for us with those specific genes
    require(gen0Counter <= gen0Limit);

    gen0Counter++;
    //use _createKitty()
    return _createKitty(0, 0, 0, _genes, msg.sender);
  }

  function _mixDNA(uint256 _momDNA, uint256 _dadDNA) internal returns(uint256){
    //extract dad with 11 0's --> dadID / 100,000,000,000
    //extract momID with momID % 10,000,000,000
    uint256 dadiDSet = (_dadDNA / 100000000000);
    uint256 momiDSet = (_momDNA % 100000000000);


    uint256 newKittenDNA = dadiDSet * 100000000000;
    newKittenDNA = newKittenDNA + momiDSet;
    return newKittenDNA;

    //_createKittyGen1(newKittenDNA, _momDNA, _dadDNA);
  }

  function _createKitty(uint256 _momID, uint256 _dadID, uint256 _generation, uint256 _genes, address _owner) internal returns(uint256){

      Kittys memory _kitty = Kittys({

        momID: uint32(_momID),
        dadID: uint32(_dadID),
        generation: uint16(_generation),
        genes: uint256(_genes),
        owner: _owner
        });

      kittys.push(_kitty);

      uint256 newKittenID = kittys.length - 1;

      _transfer(address(0), _owner, newKittenID);

      emit Birth(_owner, newKittenID, _momID, _dadID, _genes);

      return newKittenID;

  }

  function getKitty(uint256 tokenID) public view returns(uint, uint, uint, address, uint){

    //Kittys[] storage _kittys = kittys[tokenID];

      //genes = _kittys.genes;
      //momID = _kittys.momID;
      //dadID = _kittys.dadID;
      //birthTime = _kittys.birthTime;
      //generation = _kittys.generation;

      Kittys storage kitties = kittys[tokenID];

      return(
        kitties.genes,
        kitties.momID,
        kitties.dadID,
        kitties.owner,
        kitties.generation
        );
  }

    /// @notice Change or reaffirm the approved address for an NFT
    /// @dev The zero address indicates there is no approved address.
    /// Throws unless `msg.sender` is the current NFT owner, or an authorized
    /// operator of the current owner.
    /// @param _approved The new approved NFT controller
    /// @param _tokenId The NFT to approve
  function approve(address _approved, uint256 _tokenId) external override {
    //takes a single NFT and gives approval to another address to move
    require(_approved != address(0), "ERC721: Transfer is to the 0 address!");
    require(owns(msg.sender, _tokenId));

    _approve(_approved, _tokenId);

    emit Approval(msg.sender, _approved, _tokenId);
  }

  function _approve(address _approved, uint256 _tokenId) internal {

    nftApprovals[_tokenId] = _approved;

  }

  /// @notice Enable or disable approval for a third party ("operator") to manage
  ///  all of `msg.sender`'s assets
  /// @dev Emits the ApprovalForAll event. The contract MUST allow
  ///  multiple operators per owner.
  /// @param _operator Address to add to the set of authorized operators
  /// @param _approved True if the operator is approved, false to revoke approval
  function setApprovalForAll(address _operator, bool _approved) external override {

    require(_operator != msg.sender, "ERC721: Cannot *approve* your own address!");

    operatorApproval[msg.sender][_operator] = _approved;

    emit ApprovalForAll(msg.sender, _operator, _approved);
  }

  /// @notice Query if an address is an authorized operator for another address
  /// @param _owner The address that owns the NFTs
  /// @param _operator The address that acts on behalf of the owner
  /// @return True if `_operator` is an approved operator for `_owner`, false otherwise
  function isApprovedForAll(address _owner, address _operator) external override view returns (bool){

    if(operatorApproval[_owner][_operator] == true){
      return true;
    }
    else {
      return false;
    }
  }

  /// @notice Get the approved address for a single NFT
  /// @dev Throws if `_tokenId` is not a valid NFT.
  /// @param _tokenId The NFT to find the approved address for
  /// @return The approved address for this NFT, or the zero address if there is none
  function getApproved(uint256 _tokenId) external override view returns (address){

    if(_tokenId < kittys.length){
        if(nftApprovals[_tokenId] == address(0)) {
          return address(0);
        }
      else{
        return nftApprovals[_tokenId];
      }
    }
  }

  /// @notice Transfer ownership of an NFT -- THE CALLER IS RESPONSIBLE
  ///  TO CONFIRM THAT `_to` IS CAPABLE OF RECEIVING NFTS OR ELSE
  ///  THEY MAY BE PERMANENTLY LOST
  /// @dev Throws unless `msg.sender` is the current owner, an authorized
  ///  operator, or the approved address for this NFT. Throws if `_from` is
  ///  not the current owner. Throws if `_to` is the zero address. Throws if
  ///  `_tokenId` is not a valid NFT.
  /// @param _from The current owner of the NFT
  /// @param _to The new owner
  /// @param _tokenId The NFT to transfer
  function transferFrom(address _from, address _to, uint256 _tokenId) external override {
    require( owns(msg.sender, _tokenId) ||
    operatorApproval[_from][msg.sender] == true ||
    nftApprovals[_tokenId] == msg.sender, "ERC721: Permission to transfer not granted from your address");

    require(ownerOfNFT[_tokenId] == _from);
    require(_to != address(0), "ERC721: Transfer cannot go to the 0 address!");
    require(_tokenId < kittys.length);


    _transfer(_from, _to, _tokenId);

  }

  function safeTransferFrom(address _from, address _to, uint256 _tokenId) public virtual override {
    safeTransferFrom(_from, _to, _tokenId, "");
  }

  function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes memory data) public virtual override {
    require( owns(msg.sender, _tokenId) ||
    operatorApproval[_from][msg.sender] == true ||
    nftApprovals[_tokenId] == msg.sender, "ERC721: Permission to transfer not granted from your address");

    require(ownerOfNFT[_tokenId] == _from);
    require(_to != address(0), "ERC721: Transfer cannot go to the 0 address!");
    require(_tokenId < kittys.length);

    _safeTransfer(_from, _to, _tokenId, data);
  }

  //part of safeTransferFrom(), CHECKS to make sure token destination supports NFT
  function _safeTransfer(address _from, address _to, uint256 _tokenId, bytes memory data) internal {
    require( _checkERC721Support(_from, _to, _tokenId, data) );
    _transfer(_from, _to, _tokenId);
    //CHECK if created func '_checkERC721Support' returns boolean true
  }

  //calls _to contract to see if it supports ERC721 token standard
  function _checkERC721Support(address _from, address _to, uint256 _tokenId, bytes memory data) internal returns(bool){
    //call created func 'isContract' with param _to to check if it's a contract
    if( !_isContract(_to) ){
      //if NOT a contract, we know it's a wallet --> ERC wallets can support NFTs
      return true;
    }

    //if it IS a contract, call onERC721Received
      //(standard func that contracts must have if they want to
        //be interoperable with NFTs)
    //CHECK RETURN VALUE of onERC721Received ^^

    //created an interface contract to make a call to an external contract
      //how do call an external contract if you only know the address & 1 function
      //.. make an interface contract.. 'IERC721Receiver'
    //create a bytes variable that captures value of external call and tests if it's true
    else{
      bytes4 returnData = IERC721Receiver(_to).onERC721Received(msg.sender, _from, _tokenId, data);

      if(returnData == bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))){
        return true;
      }
      else{
        return false;
      }
    }
  }

  function _isContract(address _to) view internal returns(bool){
    //if it calls a wallet, code size = 0... if it's a contract, code size > 1
    uint32 size;
    assembly{
      size := extcodesize(_to)
    }
    return size > 0;
  }
}
