import '../../Assets/Styles/search.css';
import { InputSearchBar } from '../../Components/Material-UI/ui-search-bar';
import { SearchButton } from '../../Components/Material-UI/ui-button';

const Search = ({ onSubmit, onChange }) => {
	return (
		<>
			<div className='search-container'>
				<form onSubmit={onSubmit} data-testid='search-bar-form'>
					<InputSearchBar
						id='demo-helper-text-aligned-no-helper'
						type='search'
						label='Search playlist here'
						size='small'
						onChange={onChange}
					/>
					<SearchButton variant='contained' type='submit'>Search</SearchButton>
				</form>
			</div>
		</>

	);
};

export default Search;
