import { FilterButtonContainer, FiltersContainer, ItemsLeft, FilterButton } from "./TodoFilters.components"

const TodoFilters = () => {
    return (
        <FiltersContainer>
            <ItemsLeft />
            <FilterButtonContainer>
                <FilterButton action={()=> {}} active="All" filter="Ver todo" />
                <FilterButton action={()=> {}} active="All" filter="Activo"/>
                <FilterButton action={()=> {}} active="All" filter="Completado"/>
            </FilterButtonContainer>
            <button className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
                Borrar completados
            </button>
        </FiltersContainer>
    )
}

export { TodoFilters }