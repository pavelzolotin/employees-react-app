import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

const data = [
    {
        name: 'John D.',
        salary: 1000,
        increase: false,
        like: false,
        id: 1
    },
    {
        name: 'Sam S.',
        salary: 2500,
        increase: true,
        like: false,
        id: 2
    },
    {
        name: 'Gven M.',
        salary: 3000,
        increase: false,
        like: false,
        id: 3
    }
]

function App() {
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                <EmployeesList data={ data }/>
                <EmployeesAddForm/>
            </div>
        </div>
    )
}

export default App;