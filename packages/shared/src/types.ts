export interface VideoMetadata {
  id: string;
  title: string;
  duration: number;
  format: string;
  resolution: {
    width: number;
    height: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface ProcessingJob {
  id: string;
  videoId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress: number;
  error?: string;
  createdAt: Date;
  updatedAt: Date;
} 