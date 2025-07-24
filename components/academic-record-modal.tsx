"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Award, Calendar, GraduationCap } from "lucide-react"

interface AcademicRecordModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AcademicRecordModal({ isOpen, onClose }: AcademicRecordModalProps) {
  const academicData = {
    university: "North-West University",
    website: "https://www.nwu.ac.za",
    date: "14/07/2025",
    universityNumber: "37962574",
    name: "Mr Blessing, Masemola",
    dateOfBirth: "26/11/2002",
    qualification: "Bachelor Of Science In Information Technology",
    firstYear: "2022",
    presentationMode: "Contact",
    campus: "Vanderbijlpark",
    nqfLevel: "Level 7",
    saqaId: "73063",
    overallGPA: 74,
    totalCredits: "344.00 credits of 472.00",
  }

  const yearlyData = [
    {
      year: 2022,
      gpa: 80,
      credits: "96.00 credits of 96.00",
      courses: [
        { code: "ALDE111", name: "Academic Literacy Development 1 - Eng", level: 5, mark: 50.0, result: "RPL" },
        { code: "WISS113", name: "Introductory Mathematics I", level: 5, mark: 77.0, result: "Distinction" },
        { code: "ITSP111", name: "Introduction To Problem Solving", level: 5, mark: 82.0, result: "Distinction" },
        { code: "BMAN111", name: "Introduction To Business Management", level: 5, mark: 75.0, result: "Distinction" },
        { code: "STTN111", name: "Descriptive Statistics", level: 5, mark: 92.0, result: "Distinction" },
        { code: "WISS123", name: "Introductory Mathematics 2", level: 5, mark: 78.0, result: "Distinction" },
        { code: "STTN121", name: "Intro Stat Inference I", level: 5, mark: 69.0, result: "Pass" },
        { code: "ITSP121", name: "Introductory Programming Principals", level: 5, mark: 89.0, result: "Distinction" },
        { code: "ALDE122", name: "Academic Literacy Development - Eng", level: 5, mark: 75.0, result: "Distinction" },
      ],
    },
    {
      year: 2023,
      gpa: 74,
      credits: "128.00 credits of 128.00",
      courses: [
        {
          code: "ITSP113",
          name: "Introd To Graphical Interface Programming",
          level: 5,
          mark: 82.0,
          result: "Distinction",
        },
        { code: "MTHS113", name: "Basic Mathematical Techniques", level: 5, mark: 76.0, result: "Distinction" },
        { code: "ACFS111", name: "Financial Accounting Special", level: 5, mark: 77.0, result: "Distinction" },
        {
          code: "ITSP114",
          name: "Introduction To Object Oriented Programming",
          level: 5,
          mark: 80.0,
          result: "Distinction",
        },
        {
          code: "CMPG111",
          name: "Introduction To Computing And Programming",
          level: 5,
          mark: 75.0,
          result: "Distinction",
        },
        { code: "BMAN223", name: "Problem Solving For Managers", level: 6, mark: 75.0, result: "Distinction" },
        { code: "ACFS121", name: "Financial Accounting Special", level: 5, mark: 65.0, result: "Pass" },
        { code: "CMPG121", name: "Structured Programming", level: 5, mark: 51.0, result: "Pass" },
        { code: "CMPG122", name: "User Interface Programming I", level: 5, mark: 77.0, result: "Distinction" },
      ],
    },
    {
      year: 2024,
      gpa: 71,
      credits: "120.00 credits of 120.00",
      courses: [
        { code: "CMPG211", name: "Object Oriented Programming", level: 6, mark: 80.0, result: "Distinction" },
        { code: "WVNS211", name: "Understanding The Natural World", level: 6, mark: 74.0, result: "Pass" },
        {
          code: "CMPG212",
          name: "Apps And Advanced User Interface Programming",
          level: 6,
          mark: 83.0,
          result: "Distinction",
        },
        { code: "CMPG214", name: "Communication Skills", level: 6, mark: 79.0, result: "Distinction" },
        { code: "CMPG215", name: "Information Security", level: 6, mark: 64.0, result: "Pass" },
        { code: "CMPG213", name: "System Analysis And Design 1", level: 6, mark: 69.0, result: "Pass" },
        { code: "WVNS221", name: "Understanding The Natural World", level: 6, mark: 75.0, result: "Distinction" },
        { code: "CMPG221", name: "Data Structures And Algorithms", level: 6, mark: 51.0, result: "Pass" },
        { code: "CMPG223", name: "System Analysis And Design 2", level: 6, mark: 63.0, result: "Pass" },
        { code: "CMPG222", name: "Data Analytics 2", level: 6, mark: 85.0, result: "Distinction" },
        { code: "MTHS225", name: "Discrete Mathematics", level: 6, mark: 57.0, result: "Pass" },
      ],
    },
    {
      year: 2025,
      gpa: 60,
      credits: "64.00 credits (In Progress)",
      courses: [
        { code: "CMPG313", name: "Artificial Intelligence", level: 7, mark: 54.38, result: "Pass" },
        { code: "CMPG315", name: "Computer Networks", level: 7, mark: 57.75, result: "Pass" },
        { code: "CMPG311", name: "Databases", level: 7, mark: 56.16, result: "Pass" },
        { code: "CMPG312", name: "Decision Support Systems 1", level: 7, mark: 69.0, result: "Pass" },
      ],
    },
  ]

  const getResultBadgeColor = (result: string) => {
    switch (result) {
      case "Distinction":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Pass":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "RPL":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getGPAColor = (gpa: number) => {
    if (gpa >= 75) return "text-green-600 dark:text-green-400"
    if (gpa >= 65) return "text-blue-600 dark:text-blue-400"
    if (gpa >= 50) return "text-yellow-600 dark:text-yellow-400"
    return "text-red-600 dark:text-red-400"
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700">
        <DialogHeader className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-black dark:text-white flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              Academic Record
            </DialogTitle>
            <a
              href={academicData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
            >
              <ExternalLink className="h-4 w-4" />
              {academicData.website}
            </a>
          </div>
        </DialogHeader>

        <div className="space-y-6 p-2">
          {/* Student Information */}
          <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg text-black dark:text-white flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Student Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p>
                    <span className="font-medium text-black dark:text-white">Name:</span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">{academicData.name}</span>
                  </p>
                  <p>
                    <span className="font-medium text-black dark:text-white">University Number:</span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">{academicData.universityNumber}</span>
                  </p>
                  <p>
                    <span className="font-medium text-black dark:text-white">Date of Birth:</span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">{academicData.dateOfBirth}</span>
                  </p>
                  <p>
                    <span className="font-medium text-black dark:text-white">Campus:</span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">{academicData.campus}</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium text-black dark:text-white">Qualification:</span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">{academicData.qualification}</span>
                  </p>
                  <p>
                    <span className="font-medium text-black dark:text-white">NQF Level:</span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">{academicData.nqfLevel}</span>
                  </p>
                  <p>
                    <span className="font-medium text-black dark:text-white">SAQA ID:</span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">{academicData.saqaId}</span>
                  </p>
                  <p>
                    <span className="font-medium text-black dark:text-white">First Registration:</span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">{academicData.firstYear}</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Overall Performance */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Overall Academic Performance</h3>
                <div className="flex justify-center items-center gap-8">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{academicData.overallGPA}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Overall GPA</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      {academicData.totalCredits}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Credits Completed</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Yearly Performance */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-black dark:text-white">Yearly Academic Performance</h3>
            {yearlyData.map((yearData) => (
              <Card key={yearData.year} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader className="bg-gray-50 dark:bg-gray-700/50">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg text-black dark:text-white flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      {yearData.year}
                    </CardTitle>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className={`text-lg font-bold ${getGPAColor(yearData.gpa)}`}>GPA: {yearData.gpa}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{yearData.credits}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-2 text-black dark:text-white">Course Code</th>
                          <th className="text-left py-2 text-black dark:text-white">Course Name</th>
                          <th className="text-center py-2 text-black dark:text-white">Level</th>
                          <th className="text-center py-2 text-black dark:text-white">Mark</th>
                          <th className="text-center py-2 text-black dark:text-white">Result</th>
                        </tr>
                      </thead>
                      <tbody>
                        {yearData.courses.map((course, index) => (
                          <tr
                            key={index}
                            className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/30"
                          >
                            <td className="py-2 font-medium text-gray-900 dark:text-gray-100">{course.code}</td>
                            <td className="py-2 text-gray-700 dark:text-gray-300">{course.name}</td>
                            <td className="py-2 text-center text-gray-600 dark:text-gray-400">{course.level}</td>
                            <td className="py-2 text-center font-medium text-gray-900 dark:text-gray-100">
                              {course.mark}
                            </td>
                            <td className="py-2 text-center">
                              <Badge className={`${getResultBadgeColor(course.result)} text-xs`}>{course.result}</Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certificate of Conduct */}
          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-black dark:text-white mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-green-600 dark:text-green-400" />
                Certificate of Conduct
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                It is hereby certified that the student is/was registered for the abovementioned year/years at the
                university and that the student's behaviour is/was satisfactory. (In respect of students who are
                enrolled, this declaration is valid as at the date of issue.) This document is issued without omission
                or change in any form.
              </p>
              <div className="mt-4 text-right">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">REGISTRAR</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{academicData.date}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
