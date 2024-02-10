import Main from './component/Main';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import DiseaseInfo from './component/DiseaseInfo';
import FileInputExample from './component/FileInputExample';
import SelectFile from './component/SelectFile';
// import FileSelector from './component/FileSelector';


function App() {
  return (
    <div className="App">
      {/* <FileSelector/> */}
      {/* <FileInputExample/> */}
      <Routes>
        <Route path='/' element={<SelectFile/>} />
        <Route path='/diseaseInfo' element={<DiseaseInfo />} />
      </Routes>
    </div>
  );
}

export default App;
