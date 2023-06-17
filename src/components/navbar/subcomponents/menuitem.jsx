const MenuItem = ({option, num}) => {
    return (
        <div className="flex items-center h-20 hover:bg-slate-800 hover:rounded-lg hover:text-yellow-400 pl-3 transition-all">
            <a href="">{option}<span className="text-xl ml-3">{num}</span></a>
        </div>
    );
}

export default MenuItem;