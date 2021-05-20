// import { INIT_CODE_HASH } from '../src/constants'

import { bytecode } from '../build/ButterPair.json'
import { keccak256 } from '@ethersproject/solidity'

const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])
console.log(COMPUTED_INIT_CODE_HASH)
