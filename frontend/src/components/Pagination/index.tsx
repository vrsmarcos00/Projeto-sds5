import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
    onPageChange: Function;
}

const Pagination = ({ page, onPageChange }: Props) => {

    return (
        <div className="row d-flex justify-content-center mt-3 mb-2 fs-5">
            <nav className='d-flex justify-content-center'>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number - 1)}>Anterior</button>
                    </li>
                    <li className="page-item">
                        <span className="page-link text-dark fw-bold">{page.number + 1}</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number + 1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Pagination;
