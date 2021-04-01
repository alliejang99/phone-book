import React, { Component } from 'react'

export default class PhoneForm extends Component {
  state={
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit} >
        <input 
          type="text"
          placeholder="이름"
          value={this.state.name} // 이름을 입력하고 나면 초기화
          onChange={this.handleChange} // 텍스트 값이 변할때마다 발생
          name="name"
        />
        <br />
        <input 
          type="number"
          placeholder="번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">등록</button>
        <h3>
          name:&nbsp;&nbsp;{this.state.name}
          <br />
          phone:&nbsp;&nbsp;{this.state.phone}
        </h3>
      </form>
    )
  }
}
