import {Router} from "express";
import {createClinica} from '../controllers/clinica.controllers';
import {getClinicas} from '../controllers/clinica.controllers';
import {getOneClinica} from '../controllers/clinica.controllers';
import {updateClinica} from '../controllers/clinica.controllers';
import {deleteClinica} from '../controllers/clinica.controllers';

const router = Router();

router.post('/',createClinica);
router.get('/', getClinicas);
router.get('/:id',getOneClinica);
router.put('/:id',updateClinica);
router.delete('/:id',deleteClinica);

export default router;
