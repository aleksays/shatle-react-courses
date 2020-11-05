import { Component, createRef } from 'react';
import './styles.css';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.buttonToggleRef = createRef();
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    closeDropdown = (event) => {
        if(this.buttonToggleRef && !this.buttonToggleRef.current.contains(event.target)) {
            this.setState({ isOpen: false });
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.closeDropdown);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.closeDropdown);
    }

    render() {
        const { list } = this.props;
        const { isOpen } = this.state;
        return (
            <div className="dropdown" ref={this.buttonToggleRef}>
                <button
                    type="button"
                    className="toggle"
                    onClick={this.toggle}
                >
                    Click me!
                </button>
                <ul className={`dropdown-list ${isOpen ? 'opened' : ''}`}>
                    {list.map((item, index) => (
                        <li
                            key={`${item}-${String(index)}`}
                            className="dropdown-list__item"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}