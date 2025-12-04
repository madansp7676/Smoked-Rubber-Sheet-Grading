import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  ArrowLeft, 
  Download, 
  TrendingUp, 
  Upload, 
  Calendar,
  Filter,
  BarChart3,
  FileText
} from "lucide-react";

interface DashboardProps {
  onNavigate: (page: string) => void;
  userName?: string;
  userType?: string;
}

export function Dashboard({ onNavigate, userName, userType }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const recentUploads = [
    {
      id: 1,
      date: "2024-01-15",
      time: "14:30",
      grade: "RSS1",
      moisture: 12.5,
      price: 185,
      status: "Completed",
      image: "rubber_sheet_001.jpg"
    },
    {
      id: 2,
      date: "2024-01-14",
      time: "11:15",
      grade: "RSS2",
      moisture: 15.2,
      price: 178,
      status: "Completed",
      image: "rubber_sheet_002.jpg"
    },
    {
      id: 3,
      date: "2024-01-13",
      time: "16:45",
      grade: "RSS1",
      moisture: 11.8,
      price: 187,
      status: "Completed",
      image: "rubber_sheet_003.jpg"
    },
    {
      id: 4,
      date: "2024-01-12",
      time: "09:20",
      grade: "RSS3",
      moisture: 18.1,
      price: 168,
      status: "Completed",
      image: "rubber_sheet_004.jpg"
    },
    {
      id: 5,
      date: "2024-01-11",
      time: "13:55",
      grade: "RSS2",
      moisture: 14.7,
      price: 180,
      status: "Completed",
      image: "rubber_sheet_005.jpg"
    }
  ];

  const stats = {
    totalUploads: recentUploads.length,
    averageGrade: "RSS1.8",
    averageMoisture: 14.5,
    totalValue: recentUploads.reduce((sum, upload) => sum + upload.price, 0)
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "RSS1": return "bg-[#2E7D32]";
      case "RSS2": return "bg-blue-500";
      case "RSS3": return "bg-yellow-500";
      case "RSS4": return "bg-orange-500";
      case "RSS5": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  // Helper to download a static file served from the public/ directory.
  // `path` should be an absolute path relative to site root, e.g. '/data/users.json'
  const downloadStaticFile = (path: string, filename: string) => {
    fetch(path)
      .then((res) => {
        if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);
        return res.blob();
      })
      .then((blob) => {
        const href = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = href;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(href);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Download failed', err);
      });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => onNavigate('home')}
              className="text-gray-600 hover:text-[#2E7D32]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <div>
              <h1 className="text-3xl text-gray-900">{userType || 'Farmer'} Dashboard</h1>
              <p className="text-gray-600">{userName ? `Welcome back, ${userName}!` : 'Track your rubber sheet grading history'}</p>
            </div>
          </div>
          <Button
            onClick={() => onNavigate('upload')}
            className="bg-[#2E7D32] hover:bg-[#1B5E20]"
          >
            <Upload className="mr-2 h-4 w-4" />
            New Upload
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Uploads</p>
                      <p className="text-2xl text-gray-900">{stats.totalUploads}</p>
                    </div>
                    <Upload className="h-8 w-8 text-[#2E7D32]" />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Average Grade</p>
                      <p className="text-2xl text-gray-900">{stats.averageGrade}</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Avg. Moisture</p>
                      <p className="text-2xl text-gray-900">{stats.averageMoisture}%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Value</p>
                      <p className="text-2xl text-gray-900">₹{stats.totalValue}</p>
                    </div>
                    <FileText className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest rubber sheet gradings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUploads.slice(0, 3).map((upload) => (
                    <div key={upload.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <Calendar className="h-4 w-4 text-[#2E7D32]" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-900">{upload.image}</p>
                          <p className="text-xs text-gray-500">{upload.date} at {upload.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={`${getGradeColor(upload.grade)} text-white`}>
                          {upload.grade}
                        </Badge>
                        <span className="text-sm text-gray-600">₹{upload.price}/kg</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-6">
            <Card className="shadow-xl">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Upload History</CardTitle>
                    <CardDescription>Complete record of all your rubber sheet gradings</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => { /* placeholder for filter UI */ }}>
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => downloadStaticFile('/data/rubber_samples.csv', 'rubber_samples.csv')}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Export CSV
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => downloadStaticFile('/data/users.json', 'users.json')}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Users
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Image</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead>Moisture %</TableHead>
                      <TableHead>Price (₹/kg)</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUploads.map((upload) => (
                      <TableRow key={upload.id}>
                        <TableCell>
                          <div>
                            <div className="text-sm text-gray-900">{upload.date}</div>
                            <div className="text-xs text-gray-500">{upload.time}</div>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-gray-600">{upload.image}</TableCell>
                        <TableCell>
                          <Badge className={`${getGradeColor(upload.grade)} text-white`}>
                            {upload.grade}
                          </Badge>
                        </TableCell>
                        <TableCell>{upload.moisture}%</TableCell>
                        <TableCell className="text-[#2E7D32]">₹{upload.price}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-[#2E7D32] border-green-200">
                            {upload.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => downloadStaticFile(`/data/${upload.image}`, upload.image)}
                            title={`Download ${upload.image}`}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle>Grade Distribution</CardTitle>
                  <CardDescription>Breakdown of your rubber sheet grades</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["RSS1", "RSS2", "RSS3"].map((grade) => {
                      const count = recentUploads.filter(u => u.grade === grade).length;
                      const percentage = (count / recentUploads.length) * 100;
                      return (
                        <div key={grade} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Badge className={`${getGradeColor(grade)} text-white`}>{grade}</Badge>
                            <span className="text-sm text-gray-600">{count} uploads</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div
                                className={`${getGradeColor(grade)} h-2 rounded-full`}
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-500">{percentage.toFixed(0)}%</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle>Quality Trends</CardTitle>
                  <CardDescription>Your rubber sheet quality over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <BarChart3 className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-500">Chart visualization would go here</p>
                    <p className="text-sm text-gray-400">Connect to see detailed analytics</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}