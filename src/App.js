import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

export default class App extends Component {
  /*
    3이 제외된 배열을 만들기
    const arr = [1, 2, 3, 4, 5];
    array.filter(num => num !== 3); // 숫자들 중에서 3이 아닌것만 출력:[1, 2, 4, 5]
  */
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: "name 1",
        phone: "010-0000-0000",
      },
      {
        id: 1,
        name: "name 2",
        phone: "010-0000-0001",
      },
    ],
    keyword: "",
  };

  // 데이터 필터링
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  // 등록
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data }), // 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.
    });
  };

  // 삭제
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter((info) => info.id !== id), // information의 아이디중에서 PhoneInfo에서의 아이디가 아닌것만 출력
    });
  };

  // 수정
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        (info) => (id === info.id ? { ...info, ...data } : info)
        // ?(true) -> 새로운 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
        // :(flase) -> 기존의 값을 그대로 유지
      ),
    });
  };

  render() {
    const { information, keyword } = this.state;
    const folteredList = information.filter(
      (info) => info.name.indexOf(keyword) !== -1
    );

    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <p>
          <input
            type="text"
            placeholder="검색"
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <PhoneInfoList
          data={folteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}
