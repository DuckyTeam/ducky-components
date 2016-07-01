import IconAvaWrapper from '../composites/IconAvaWrapper';
import React from 'react';
// import Typography from '../Typography';
// import TextArea from '../TextArea';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function SearchFieldInput(props) {
    if (props.editable) {
        return (
            <Wrapper className={classNames(styles.wrapper,
                {[props.className]: props.className})}
                size={'standard'}
            >
                <form>
                    <input
                        placeholder="Søk"
                        required="required"
                        type="text"
                        value={props.children}
                    />
                </form>
                <div className={styles.icon}>
                    <IconAvaWrapper
                        icon={"icon-search"}
                        onClick={props.onSearchSubmit}
                    />
                </div>
            </Wrapper>
        );
    }

    return (
        <Wrapper className={classNames(styles.wrapper,
                {[props.className]: props.className})}
            size={'standard'}
        >
            <form className={styles.composite}>
                <input
                    placeholder="Søk"
                    required="required"
                    type="text"
                    value={props.children}
                />
            </form>
            <div className={styles.icon}>
                <IconAvaWrapper
                    icon={"icon-search"}
                    onClick={props.onSearchSubmit}
                />
                <div className={styles.divider} />
                <IconAvaWrapper
                    icon={"icon-close"}
                    onClick={props.onClear}
                />
            </div>
        </Wrapper>
    );
}

SearchFieldInput.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    editable: PropTypes.editable,
    onClear: PropTypes.func,
    onSearchSubmit: PropTypes.func
};

export default SearchFieldInput;
