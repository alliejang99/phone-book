import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo';

export default class PhoneInfoList extends Component {
  static defaultProps = {
    list: [],
    // 함수가 전달되지 않았을 경우를 대비하여 해당 props 를 위한 defaultProps 도 설정
    onRemove: () => console.warn('onRemove not defined'),
    // 수정
    onUpdate: () => console.warn('onUpdate not defined'),
  }

  // 성능 최적화: 값이 변할때마다 렌더링되는 것을 방지
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data; //다음 받아올 data 가 현재 data 랑 다른 배열일 때 true 로 설정
  }

  render() {
    // 컴포넌트 업데이트
    console.log('render PhoneInfoList')
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(
      info => (
        <PhoneInfo 
          key={info.id}
          info={info}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )
    )

    return (
      <div>
        {list}
      </div>
    )
  }
}
