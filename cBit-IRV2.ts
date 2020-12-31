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
    /**
     * Read IR sensor value V2.
     */

    //% advanced=true shim=maqueenIRV2::irCode
    function irCode(): number {
        return 0;
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
