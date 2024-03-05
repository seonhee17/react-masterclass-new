import styled from "styled-components"


interface ContainerProps {
    bgColor:string;
}

//Typescript에게 Container 가 bgColor를 받을거라 얘기하려면<>안에 인터페이스를 넣어준다.
const Container  = styled.div<ContainerProps>`
width:200px;
height:200px;
background-color: ${(props)=> props.bgColor};
`;

//const x = (a:number , b: number )=>a+b;

interface CircleProps{
    bgColor:string;
}


function Circle({bgColor}:CircleProps){
    return <Container bgColor={bgColor} />;
}

export default Circle;

/* interface PlayShape {
    name: string;
    age : number;
}


const sayHello = (playObj:PlayShape) => `Hello ${playObj.name} you're ${playObj.age} years old`;

sayHello({name: "nico",age : 12})
 *///error hello가 정의 되어있지 않다.
//sayHello({name: "hi",age : 12,hello:1})
