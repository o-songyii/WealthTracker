const express = require("express");
const DailyRecord = require("../models/dailyRecord")

const dailyRecord = {
    readAll: async(req, res) => {
        try { 
            const dailyRecords = await DailyRecord.findAll();
            if(!dailyRecords.length)
                return res.status(404).send({
                    err: "dailyRecordNotFount"
                });

            res.send(dailyRecords)
        } catch (err) {
            res.status(500).send(err)
        }
    }
}

module.exports = dailyRecord;