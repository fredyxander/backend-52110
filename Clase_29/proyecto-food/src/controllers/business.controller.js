import { BusinessService } from "../services/business.service.js";

export const getAllBusiness = async(req,res)=>{
    try {
        const allBusiness = await BusinessService.getBusiness();
        res.json({status:"success", data:allBusiness});
    } catch (error) {
        console.log("getAllBusiness error", error.message);
        res.json({status:"error", message:"No se pudieron obtener los negocios"})
    }
};

export const getBusinessById = async(req,res)=>{
    try {
        const businessId = req.params.bid;
        const business = await BusinessService.getBusinessById(businessId);
        res.json({status:"success", data:business});
    } catch (error) {
        console.log("getBusinessById error", error.message);
        res.json({status:"error", message:"No se pudo obtener la información del negocio"})
    }
};

export const createBusiness = async(req,res)=>{
    try {
        const businessInfo = req.body;
        const businessCreated = await BusinessService.createBusiness(businessInfo)
        res.json({status:"success", data:businessCreated});
    } catch (error) {
        console.log("createBusiness error", error.message);
        res.json({status:"error", message:"No se pudo crear el negocio"})
    }
};

export const addProduct = async(req,res)=>{
    try {
        const businessId = req.params.bid;
        const newProduct = req.body;
        if(!newProduct.title || !newProduct.price){
            return res.json({status:"error", message:"datos invalidos"});
        }
        const business = await BusinessService.getBusinessById(businessId);
        business.products.push(newProduct);
        const businessUpdate = await BusinessService.updateBusiness(businessId,business);
        res.json({status:"success", data:businessUpdate});
    } catch (error) {
        console.log("addProduct error", error.message);
        res.json({status:"error", message:"No se pudo agregar el producto al negocio"})
    }
};