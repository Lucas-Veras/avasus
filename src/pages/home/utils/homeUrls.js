import { api } from "../../../services/api";

export const urls = {
    urlMaisPopoulares: `${api}/cursos?_sort=matriculados&_order=desc&_limit=3`,
    urlMelhoresAvaliados: `${api}/cursos?_sort=avaliacao&_order=desc&_limit=3`,
    urlMaisRecentes: `${api}/cursos?_sort=criado_em&_order=desc&_limit=3`
}