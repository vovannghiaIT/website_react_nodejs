import { request } from "express";
import db from "../models";
import formidable from "formidable";
import multer from "multer";

// GET ALL CATEGORY
export const getCategoriesSerivce = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({
        raw: true,
        order: [["createdAt", "DESC"]],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get categories.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// post category
export const insertCategoriesSerivce = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.create({
        name: body.name,
        code: body.code,
        slug: body.slug,
        parentid: body.parentid,
        value: body.value,
        status: body.status,
        images: body.images,
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to post categories.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
export const updateCategoriesSerivce = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body.id);
      const response = await db.Category.update(
        {
          name: body.name,
          code: body.code,
          slug: body.slug,
          parentid: body.parentid,
          value: body.value,
          status: body.status,
          images: body.images,
        },
        {
          where: {
            id: body.id,
          },
        }
      );

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to put categories.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
export const GetIdCategoriesSerivce = (body) =>
  new Promise(async (resolve, reject) => {
    try {
     // console.log(body.id);
      const response = await db.Category.findOne({
        where: {
          id: body.id,
        },
        raw: true,
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get id categories.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
