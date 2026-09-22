const express = require("express");
const protect = require("../middleware/authMiddleware");
const Enquiry = require("../models/Enquiry");

const router = express.Router();

// Create a new enquiry
router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      service,
      message,
    } = req.body;

    // Basic validation
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      company,
      service,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully.",
      enquiry,
    });

  } catch (error) {

    console.error("Enquiry creation error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while submitting the enquiry.",
    });
  }
});

// Get all enquiries
router.get("/", protect, async (req, res) => {
  try {
    const enquiries = await Enquiry.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: enquiries.length,
      enquiries,
    });

  } catch (error) {

    console.error("Fetch enquiries error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching enquiries.",
    });
  }
});

// Get a single enquiry by ID
router.get("/:id", protect, async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });
    }

    res.status(200).json({
      success: true,
      enquiry,
    });

  } catch (error) {

    console.error("Fetch enquiry error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching the enquiry.",
    });
  }
});

// Update enquiry status
router.patch("/:id", protect, async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "New",
      "Contacted",
      "Completed",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid enquiry status.",
      });
    }

    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Enquiry status updated successfully.",
      enquiry,
    });

  } catch (error) {

    console.error("Update enquiry error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while updating the enquiry.",
    });
  }
});

// Delete an enquiry
router.delete("/:id", protect, async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Enquiry deleted successfully.",
    });

  } catch (error) {

    console.error("Delete enquiry error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while deleting the enquiry.",
    });
  }
});

module.exports = router;