import {Router} from "express";
import {createSucursal} from '../controllers/sucursal.controllers';
import {getSucursals} from '../controllers/sucursal.controllers';
import {getOneSucursal} from '../controllers/sucursal.controllers';
import {updateSucursal} from '../controllers/sucursal.controllers';
import {deleteSucursal} from '../controllers/sucursal.controllers';

const router = Router();

router.post('/',createSucursal);
router.get('/', getSucursals);
router.get('/:id',getOneSucursal);
router.put('/:id',updateSucursal);
router.delete('/:id',deleteSucursal);

export default router;
