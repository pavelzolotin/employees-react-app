import './search-panel.css';

const searchPanel = () => {
    return (
        <input
            type="text"
            className="form-control search-input"
            placeholder="Find an employee"
        />
    )
}

export default searchPanel;