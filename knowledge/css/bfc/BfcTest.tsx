import React from 'react';
import './bfc..scs';

export default function BfcTest() {
    return (
        <>
            <div className={'_'}>
                <div className={'first'}>I am a floated box!</div>
                <div className={'second'}>I am content inside the container.</div>
            </div>
            <h1>margin重叠</h1>
            <div style={{display: 'flow-root'}}>
                <div style={{margin: '20px'}}>I am a box!</div>
                <div style={{margin: '20px'}}>I am content inside the container.</div>
            </div>
            <h1>bft盒子不会和浮动盒子重叠</h1>
            <div style={{float: 'left', width: '100px', height: '100px', background: 'pink'}}>float 盒子</div>
        </>

    );
}
