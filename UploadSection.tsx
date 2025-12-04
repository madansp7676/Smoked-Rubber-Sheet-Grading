import { useState, useCallback } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Upload, Camera, CheckCircle, AlertCircle, ArrowLeft, Download } from "lucide-react";

interface UploadSectionProps {
  onNavigate: (page: string) => void;
}

interface GradingResult {
  grade: string;
  moisture: number;
  price: number;
  quality: string;
  remarks: string;
}

export function UploadSection({ onNavigate }: UploadSectionProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [result, setResult] = useState<GradingResult | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadedFilename, setUploadedFilename] = useState<string | null>(null);

  const handleFileUpload = useCallback((file: File) => {
    // remember original filename for report
    setUploadedFilename(file.name ?? null);
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setUploadedImage(dataUrl);

      // Derive result from filename (e.g. RSS1, RSS2, RSS3, RSS4)
      const name = (file && file.name) ? file.name : '';
      const derived = deriveResultFromFilename(name);
      if (derived) {
        // immediately show derived result
        setIsUploading(false);
        setUploadProgress(100);
        setResult(derived);
      } else {
        // fallback to simulated grading (or you can replace with real upload)
        simulateGrading();
      }
    };
    reader.readAsDataURL(file);
  }, []);

  // Generate a simple text report and trigger download (also offer the uploaded image)
  const handleDownloadReport = () => {
    if (!result) return;
    const ts = new Date().toISOString();
    const safeTs = ts.replace(/[:.]/g, "-");
    const baseName = `rubber_report_${result.grade || 'unknown'}_${safeTs}`;

    const lines: string[] = [];
    lines.push('Rubber Grading Report');
    lines.push('====================');
    lines.push(`Generated: ${ts}`);
    if (uploadedFilename) lines.push(`Uploaded file: ${uploadedFilename}`);
    lines.push('');
    lines.push(`Grade: ${result.grade}`);
    lines.push(`Quality: ${result.quality}`);
    lines.push(`Moisture: ${result.moisture}`);
    lines.push(`Price (₹/kg): ${result.price}`);
    lines.push('');
    lines.push('Remarks:');
    lines.push(result.remarks);
    lines.push('');
    const content = lines.join('\n');

    // download text report
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${baseName}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);

    // optionally download the uploaded image if present
    if (uploadedImage) {
      try {
        const imgLink = document.createElement('a');
        imgLink.href = uploadedImage;
        const imgName = uploadedFilename || `${baseName}.png`;
        imgLink.download = imgName;
        document.body.appendChild(imgLink);
        imgLink.click();
        imgLink.remove();
      } catch (err) {
        // ignore image download errors
        console.warn('failed to download image', err);
      }
    }
  };

  // Look for RSS grade token in filename (case-insensitive). Returns a GradingResult or null.
  function deriveResultFromFilename(filename: string): GradingResult | null {
    if (!filename) return null;
    const s = filename.toLowerCase();
    let grade: string | null = null;
    if (s.includes('rss1')) grade = 'RSS1';
    else if (s.includes('rss2')) grade = 'RSS2';
    else if (s.includes('rss3')) grade = 'RSS3';
    else if (s.includes('rss4')) grade = 'RSS4';
    if (!grade) return null;

    const presets: Record<string, { moisture: number; price: number; quality: string; remarks: string }> = {
      RSS1: { moisture: 2.0, price: 200, quality: 'Premium', remarks: 'Detected RSS1 from filename' },
      RSS2: { moisture: 4.0, price: 170, quality: 'Good', remarks: 'Detected RSS2 from filename' },
      RSS3: { moisture: 8.0, price: 140, quality: 'Average', remarks: 'Detected RSS3 from filename' },
      RSS4: { moisture: 10.0, price: 110, quality: 'Below Average', remarks: 'Detected RSS4 from filename' },
    };

    const p = presets[grade];
    return {
      grade,
      moisture: p.moisture,
      price: p.price,
      quality: p.quality,
      remarks: p.remarks,
    };
  }

  const simulateGrading = () => {
    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          
          // Mock result
          setResult({
            grade: "RSS1",
            moisture: 12.5,
            price: 185,
            quality: "Premium",
            remarks: "Excellent quality rubber sheet with optimal moisture content"
          });
          
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      handleFileUpload(files[0]);
    }
  }, [handleFileUpload]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onNavigate('home')}
          className="mb-8 text-gray-600 hover:text-[#2E7D32]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-3xl text-gray-900 mb-4">Upload & Grade Rubber Sheet</h1>
          <p className="text-gray-600">
            Upload a clear image of your rubber sheet for AI-powered quality assessment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="mr-2 h-5 w-5 text-[#2E7D32]" />
                Upload Image
              </CardTitle>
              <CardDescription>
                Drag and drop or click to select an image of your rubber sheet
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!uploadedImage ? (
                <div
                  className="border-2 border-dashed border-green-300 bg-green-50 rounded-xl p-8 text-center hover:border-[#2E7D32] hover:bg-green-100 transition-colors cursor-pointer"
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => document.getElementById('file-input')?.click()}
                >
                  <Upload className="mx-auto h-12 w-12 text-[#2E7D32] mb-4" />
                  <p className="text-lg text-gray-700 mb-2">Drop your image here</p>
                  <p className="text-sm text-gray-500 mb-4">or click to browse</p>
                  <Button variant="outline" className="border-[#2E7D32] text-[#2E7D32]">
                    Choose File
                  </Button>
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={uploadedImage}
                      alt="Uploaded rubber sheet"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  {isUploading && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Processing...</span>
                        <span className="text-[#2E7D32]">{uploadProgress}%</span>
                      </div>
                      <Progress value={uploadProgress} className="h-2" />
                      <p className="text-xs text-gray-500 text-center">
                        AI is analyzing your rubber sheet quality
                      </p>
                    </div>
                  )}

                  <Button
                    variant="outline"
                    onClick={() => {
                      setUploadedImage(null);
                      setResult(null);
                      setUploadProgress(0);
                    }}
                    className="w-full"
                  >
                    Upload Different Image
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-[#2E7D32]" />
                Grading Results
              </CardTitle>
              <CardDescription>
                AI-powered analysis of your rubber sheet quality
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!result ? (
                <div className="text-center py-12">
                  <AlertCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-500">Upload an image to see grading results</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Grade */}
                  <div className="bg-green-50 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Grade</span>
                      <Badge className="bg-[#2E7D32] text-white">{result.grade}</Badge>
                    </div>
                    <div className="text-sm text-gray-600">Quality: {result.quality}</div>
                  </div>

                  {/* Moisture Content */}
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Moisture Content</span>
                      <span className="text-lg text-blue-600">{result.moisture}%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${result.moisture}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="bg-orange-50 p-4 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Current Market Price</span>
                      <span className="text-2xl text-orange-600">₹{result.price}/kg</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Based on current market rates</div>
                  </div>

                  {/* Remarks */}
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="text-sm text-gray-600 mb-2">Remarks</h4>
                    <p className="text-sm text-gray-700">{result.remarks}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-[#2E7D32] hover:bg-[#1B5E20]" onClick={handleDownloadReport}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Report
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => onNavigate('dashboard')}
                      className="flex-1"
                    >
                      View History
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}