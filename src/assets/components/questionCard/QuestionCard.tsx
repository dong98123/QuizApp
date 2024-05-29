import './QuestionCard.scss'


type props = {
    question : string;
    corectAnser: string;
    userAnswer : string;
    questionNunber : number;
    totalQuestion : number;
    answers : string[]
}
 
const QuestionCart: React.FunctionComponent<props> = ({ question,answers, corectAnser, userAnswer, questionNunber, totalQuestion }) => 
  (<div className='qestioncard'>
        <div className='number'>
            <p> Question {questionNunber} / {totalQuestion} </p>
        </div>
        <div className='question'>
            <p> Question : {question}</p>
        </div>
        <div className='answer'>
            {/* {
                answers.map((anser) => <p>{anser}</p>)
            }
                 */}
        </div>
        <div>
            <div><button>Next Question</button></div>
        </div>
                
  </div>)
 ;

export default QuestionCart;