import Header from "./components/Header";
import Questionair from "./components/Questionair";
import Stepper from "./components/Stepper";
import Layout from "./layout";
function App() {
  return (
    <Layout>
      <Header/>
      <Stepper/>
      <Questionair />
    </Layout>
  );
}

export default App;
