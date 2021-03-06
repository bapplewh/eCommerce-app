// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { 
    faSearch,
    faPlus,
    faMinus,
    faTimes,
    faCartPlus
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    library.add(
        faSearch,
        faPlus,
        faMinus,
        faTimes,
        faCartPlus
    );
};

export default Icons;