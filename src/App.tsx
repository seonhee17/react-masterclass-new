import styled from "styled-components";
import Circle from "./Circle";

//3.2 Typing the Props
function App(){

  return (<div>
            <Circle bgColor="tomato" />
            <Circle bgColor="teal" />
          </div>
    );
}

export default App;

// 설치 @type/styled-components ~ typescript에게 설명해주기 위해 
// 이것을 DefinitelyTyped 라고 한다.