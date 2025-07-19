import logo from './logo.svg';
import './App.css';
import Inline from './ApplyCss/Inline';
import Internal from './ApplyCss/Internal';
import External from './ApplyCss/External';
import Modulecss from './ApplyCss/Modulecss';
import ClassExample from './component/ClassExample';
import FunctionEx from './component/FunctionEx';
import ExpressionEx from './Expression/ExpressionEx';
import ImageCall from './ImageCall';

function App() {
  return (
   <div>
      <Inline />
      <Internal />
      <External></External>
      <Modulecss></Modulecss>
      <ClassExample/>
      <FunctionEx/>
      <ExpressionEx/>
      <ImageCall/>
   </div>
  );
}

export default App;
