enum PIN {
    P0 = 3,
    P1 = 2,
    P2 = 1,
    P8 = 18,
    //P9 = 10,
    P12 = 20,
    P13 = 23,
    P14 = 22,
    P15 = 21,
};
//% weight=100  color=#00A654   block="cBit IR V2" icon="\uf067"
namespace cBitIR 
{
    let irstate:number;
    let state:number;
    export class Packeta {
        public mye: string;
        public myparam: number;
    }
    export enum enIRkey{
      //% blockId="CH_MINUS" block="CH_MINUS"
      CH_MINUS = 0x00,
      //% blockId="CH" block="CH"
	  CH = 0x01,
      //% blockId="CH_Add" block="CH_Add"
	  CH_Add = 0x02,
      //% blockId="PREV" block="PREV"
	  PREV = 0x03,
      //% blockId="PLAY" block="PLAY"
	  PLAY = 0x04,
      //% blockId="NUM_200" block="NUM_200"
	  NUM_200 = 0x05,
      //% blockId="NEXT" block="NEXT"
	  NEXT = 0x06,
      //% blockId="NUM_100" block="NUM_100"
	  NUM_100 = 0x07,
      //% blockId="Minus" block="Minus"
	  Minus = 0x08,
      //% blockId="Add" block="Add"
	  Add = 0x09,
      //% blockId="EQ" block="EQ"
	  EQ = 0x0a,
      //% blockId="NUM0" block="NUM0"
	  NUM0 = 0x0b,
      //% blockId="NUM1" block="NUM1"
	  NUM1 = 0x0c,
      //% blockId="NUM2" block="NUM2"
	  NUM2 = 0x0d,
      //% blockId="NUM3" block="NUM3"
	  NUM3 = 0x0e,
      //% blockId="NUM4" block="NUM4"
	  NUM4 = 0x0f,
      //% blockId="NUM5" block="NUM5"
	  NUM5 = 0x10,
      //% blockId="NUM6" block="NUM6"
	  NUM6 = 0x11,
      //% blockId="NUM7" block="NUM7"
	  NUM7 = 0x12,
      //% blockId="NUM8" block="NUM8"
	  NUM8 = 0x13,
      //% blockId="NUM9" block="NUM9"
	  NUM9 = 0x14,
    }
    /**
     * Read IR sensor value V2.
     */

    //% advanced=true shim=maqueenIRV2::irCode
    function irCode(): number {
        return 0;
    }
    
    //% weight=5
    //% group="micro:bit(v2)"
    //% blockId=clb_IR_KeyValue block="clb_IR_KeyValue|value %value"
    export function clb_IR_KeyValue(value: enIRkey): number {
        return value;
    }
    
    //% weight=5
    //% group="micro:bit(v2)"
    //% block="read IR key value"
    export function IR_readV2(): number {
        return valuotokeyConversion();
    }

    //% weight=2
    //% group="micro:bit(v2)"
    //% block="on IR received"
    //% draggableParameters
    export function IR_callbackUserV2(cb: (message: number) => void) {
        state = 1;
        control.onEvent(11, 22, function() {
            cb(irstate)
        }) 
    }

function valuotokeyConversion():number{
    let irdata:number;
    switch(irCode()){
        case 0xba45:irdata = 0;break;
        case 0xb946:irdata = 1;break;
        case 0xb847:irdata = 2;break;
        case 0xbb44:irdata = 3;break;
        case 0xbc43:irdata = 4;break;
        case 0xf20d:irdata = 5;break;
        case 0xbf40:irdata = 6;break;
        case 0xe619:irdata = 7;break;
        case 0xf807:irdata = 8;break;
        case 0xea15:irdata = 9;break;
        case 0xf609:irdata = 10;break;
        case 0xe916:irdata = 11;break;
        case 0xf30c:irdata = 12;break;
        case 0xe718:irdata = 13;break;
        case 0xa15e:irdata = 14;break;
        case 0xf708:irdata = 15;break;
        case 0xe31c:irdata = 16;break;
        case 0xa55a:irdata = 17;break;
        case 0xbd42:irdata = 18;break;
        case 0xad52:irdata = 19;break;
        case 0xb54a:irdata = 20;break;
        default:
         irdata = -1;
    }
    return irdata;
}

    basic.forever(() => {
        if(state == 1){
             irstate = valuotokeyConversion();
        if(irstate != -1){
            control.raiseEvent(11, 22)
        }
        }
       
        basic.pause(50);
    })
}
