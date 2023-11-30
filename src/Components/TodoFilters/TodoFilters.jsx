import { FilterButtonContainer, FiltersContainer, ItemsLeft, FilterButton } from "./TodoFilters.components"


const TodoFilters = ({ total, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearComplete }) => {
    return (
        <FiltersContainer>
            <ItemsLeft total={total} />
            <FilterButtonContainer>
                <FilterButton action={() => showAllTodos()} active={activeFilter} filter='All' />
                <FilterButton action={() => showActiveTodos()} active={activeFilter} filter='Active' />
                <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter='Completed' />
            </FilterButtonContainer>

            <button onClick={() => handleClearComplete()} className="text-gray-200 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
                Clear Completed
            </button>
        </FiltersContainer>
    )
}

export { TodoFilters }