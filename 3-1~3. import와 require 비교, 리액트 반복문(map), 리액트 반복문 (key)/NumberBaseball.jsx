import React, { Component } from 'react';

function getNumbers() { //숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수

}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    onSumbitForm = () => {

    };

    onChangeInput = () => {

    };

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSumbit={this.onSumbitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {/* {[
                        ['사과','맛잇다'],
                        ['바나나','달다'],
                        ['밤','맛없다'],
                        ['포도','시다'],
                        ['감','떫다'],
                        ['배','아프다'],
                        ['수박','존맛탱']
                    ].map((v) => {
                        return (
                            <li><b>{v[0]}</b> - {v[1]}</li>
                        );
                    })} */}
                    {[
                        { fruit: '사과', taste: '맛있다'},
                        { fruit: '바나나', taste: '달다'},
                        { fruit: '밤', taste: '맛없다'},
                        { fruit: '포도', taste: '시다'},
                        { fruit: '감', taste: '떫다'},
                        { fruit: '배', taste: '아프다'},
                        { fruit: '수박', taste: '맛없다'},
                    ].map((v, i) => {
                        return (
                            <li key={v.fruit + v.taste}><b>{v.fruit}</b> - {i}</li>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball;