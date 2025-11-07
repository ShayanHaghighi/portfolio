---
position: 2
id: "yolov8-pipeline"
title: "YOLOv8 Model Training Pipeline"
description: An end-to-end computer vision system for automated indoor dog tracking using Nest cameras, YOLOv8, and an automated labeling/retraining pipeline.

tags:
  - "Computer Vision"
  - "ML pipeline"
  - "GCP pub/sub"
  - "Jenkins"
highlights:
  - "Daily job to create labeling tasks from new images"
  - "Manual retraining job that archives models with metrics"
repo: "https://github.com/ShayanHaghighi/dog-tracker"
---

## Overview

This project demonstrates a production-ready MLOps pipeline that combines real-time inference, automated labeling workflows, and continuous model improvement. Built to track my dog across multiple rooms using Nest cameras, the system processes motion events through Google Cloud Pub/Sub, runs YOLOv8 inference with room specific models, and automatically retrains when new labeled data becomes available.

**Key Achievement**: Improved model accuracy from **30%** (default, pretrained model) to **90%** through iterative refinement and room specific training.

## Key Features

### Real-Time Event Processing
The system handles thousands of camera events daily from Nest cameras distributed across five rooms. Each motion or person detection event triggers a webhook that:
1.  Extracts and processes images in real-time
2.  Routes to room specific YOLOv8 models for optimal accuracy
3.  Saves images for future labeling and model improvement

### Automated Model Improvement Pipeline
When new labeled images accumulate, the system automatically:
- Syncs data from Label Studio
- Trains room specific YOLOv8 models using Jenkins pipelines
- Deploys improved models without service downtime
- Archives training data for historical tracking

### Room Specific Optimization
Separate YOLOv8 models trained per room (kitchen, living room, dining room, TV room, entrance) capture room specific lighting, angles, and environmental conditions, dramatically improving detection accuracy.

## Architecture

The system follows a two-phase architecture that separates training and production concerns:

### Production Flow
Real-time camera events flow through Google Cloud Pub/Sub to a Flask webhook service. The service retrieves images from the Nest SDM API, processes them through room specific YOLOv8 models, and stores results for potential future labeling.

### Training Flow
Labeled images sync from Label Studio to local storage. Jenkins pipelines evaluate completion status and automatically trigger model training when sufficient data is available. After training completes, new models are deployed and the service hot-reloads without interruption.

## Technical Design

**Production Stack:**
- Flask webhook service processing Pub/Sub events
- YOLOv8 (Ultralytics) for object detection
- Google Nest SDM API integration with OAuth2
- room specific model routing and inference

**Training Stack:**
- Label Studio for image annotation
- Jenkins pipelines for automation
- YOLOv8 transfer learning with pretrained weights
- Automated data validation and deployment

**Future Hosting:**
1. Google Cloud Run for serverless webhook processing
2. Cloud Storage for centralized data management
3. Spot instances for cost-effective model training
4. Cloud Functions for lightweight processing tasks

## Results

- **Accuracy Improvement**: 30% → 90% detection accuracy
- **Scale**: Processes thousands of events daily
- **Automation**: Fully automated retraining pipeline
- **Room Coverage**: 5 rooms with dedicated models

## Project Structure

```
DogTrackerProject/
├── dog-tracker/          # Production Flask service
│   ├── src/main/         # API endpoints and vision processing
│   └── cfg/              # Device configuration
├── dog-resources/        # Training pipeline and data
│   └── JenkinsScripts/   # Automated training pipelines
└── diagram/              # Architecture documentation
```

This project showcases expertise in **MLOps**, **computer vision**, **cloud architecture**, and **automated deployment pipelines** - skills essential for production machine learning systems.
