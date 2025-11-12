"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FormData {
  // Form metadata
  form_number: string;
  voter_area_name: string;
  voter_area_number: string;

  // Personal Information
  name_bengali: string;
  name_english: string;
  d1: string;
  d2: string;
  m1: string;
  m2: string;
  y1: string;
  y2: string;
  y3: string;
  y4: string;
  birth_place: string;
  birth_reg_no: string;
  gender: string;
  blood_group: string;
  religion: string;
  disability_status: string;
  identification_mark: string;
  education: string;
  profession: string;
  marital_status: string;

  // Contact Information
  mobile_number: string;
  telephone_number: string;

  // Father's Information
  father_name: string;
  father_nid: string;
  father_death_year: string;

  // Mother's Information
  mother_name: string;
  mother_nid: string;
  mother_death_year: string;

  // Spouse Information
  spouse_name: string;
  spouse_nid: string;
  spouse_death_year: string;

  // Present Address
  pr_village: string;
  pr_mouza: string;
  pr_house: string;
  pr_post_office: string;
  pr_post_code: string;
  pr_ward: string;
  pr_rmo: string;
  pr_upazila: string;
  pr_district: string;
  pr_division: string;
  pr_city: string;

  // Permanent Address
  pa_village: string;
  pa_mouza: string;
  pa_house: string;
  pa_post_office: string;
  pa_post_code: string;
  pa_ward: string;
  pa_rmo: string;
  pa_upazila: string;
  pa_district: string;
  pa_division: string;
  pa_city: string;

  // Other Information
  passport: string;
  driving_license: string;
  tin: string;
  reason_for_leftout: string;
}

export default function ResultsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("nidFormData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    } else {
      router.push("/");
    }
  }, [router]);

  const handleNewForm = () => {
    sessionStorage.removeItem("nidFormData");
    router.push("/");
  };

  const handlePrint = () => {
    window.print();
  };

  if (!formData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const DataRow = ({ label, value }: { label: string; value: string }) => {
    if (!value) return null;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-2 border-b border-zinc-200 last:border-0">
        <dt className="font-medium text-zinc-700">{label}</dt>
        <dd className="text-zinc-900">{value}</dd>
      </div>
    );
  };

  const dateOfBirth = `${formData.d1}${formData.d2}/${formData.m1}${formData.m2}/${formData.y1}${formData.y2}${formData.y3}${formData.y4}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-zinc-900 mb-2">
            জমাকৃত তথ্য
          </h1>
          <p className="text-xl text-zinc-600">Submitted Information</p>
        </div>

        <div className="space-y-6 print:space-y-4">
          {/* Form Metadata */}
          {(formData.form_number || formData.voter_area_name || formData.voter_area_number) && (
            <Card>
              <CardHeader>
                <CardTitle>ফরম তথ্য / Form Information</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="divide-y divide-zinc-200">
                  <DataRow label="ফরম নম্বর / Form Number" value={formData.form_number} />
                  <DataRow label="ভোটার এলাকার নাম / Voter Area Name" value={formData.voter_area_name} />
                  <DataRow label="ভোটার এলাকার নম্বর / Voter Area Number" value={formData.voter_area_number} />
                </dl>
              </CardContent>
            </Card>
          )}

          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>১. ব্যক্তিগত তথ্য / 1. Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="divide-y divide-zinc-200">
                <DataRow label="নাম (বাংলায়) / Name (in Bengali)" value={formData.name_bengali} />
                <DataRow label="নাম (English বড় অক্ষরে) / Name (in ENGLISH CAPITAL LETTERS)" value={formData.name_english} />
                {(formData.d1 || formData.d2 || formData.m1 || formData.m2 || formData.y1 || formData.y2 || formData.y3 || formData.y4) && (
                  <DataRow label="জন্মতারিখ / Date of Birth" value={dateOfBirth} />
                )}
                <DataRow label="জন্মস্থান / Place of Birth" value={formData.birth_place} />
                <DataRow label="জন্ম নিবন্ধন নম্বর / Birth Registration Number" value={formData.birth_reg_no} />
                <DataRow label="লিঙ্গ / Gender" value={formData.gender} />
                <DataRow label="রক্তের গ্রুপ / Blood Group" value={formData.blood_group} />
                <DataRow label="ধর্ম / Religion" value={formData.religion} />
                <DataRow label="প্রতিবন্ধী অবস্থা / Disability Status" value={formData.disability_status} />
                <DataRow label="বৈবাহিক অবস্থা / Marital Status" value={formData.marital_status} />
                <DataRow label="শিক্ষাগত যোগ্যতা / Education" value={formData.education} />
                <DataRow label="পেশা / Profession" value={formData.profession} />
                <DataRow label="পরিচিতি চিহ্ন / Identification Mark" value={formData.identification_mark} />
              </dl>
            </CardContent>
          </Card>

          {/* Contact Information */}
          {(formData.mobile_number || formData.telephone_number) && (
            <Card>
              <CardHeader>
                <CardTitle>যোগাযোগের তথ্য / Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="divide-y divide-zinc-200">
                  <DataRow label="মোবাইল নম্বর / Mobile Number" value={formData.mobile_number} />
                  <DataRow label="টেলিফোন নম্বর / Telephone Number" value={formData.telephone_number} />
                </dl>
              </CardContent>
            </Card>
          )}

          {/* Father's Information */}
          {(formData.father_name || formData.father_nid || formData.father_death_year) && (
            <Card>
              <CardHeader>
                <CardTitle>পিতার তথ্য / Father&apos;s Information</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="divide-y divide-zinc-200">
                  <DataRow label="পিতার নাম / Father's Name" value={formData.father_name} />
                  <DataRow label="পিতার NID / Father's NID" value={formData.father_nid} />
                  <DataRow label="মৃত্যু বছর / Death Year" value={formData.father_death_year} />
                </dl>
              </CardContent>
            </Card>
          )}

          {/* Mother's Information */}
          {(formData.mother_name || formData.mother_nid || formData.mother_death_year) && (
            <Card>
              <CardHeader>
                <CardTitle>মাতার তথ্য / Mother&apos;s Information</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="divide-y divide-zinc-200">
                  <DataRow label="মাতার নাম / Mother's Name" value={formData.mother_name} />
                  <DataRow label="মাতার NID / Mother's NID" value={formData.mother_nid} />
                  <DataRow label="মৃত্যু বছর / Death Year" value={formData.mother_death_year} />
                </dl>
              </CardContent>
            </Card>
          )}

          {/* Spouse Information */}
          {(formData.spouse_name || formData.spouse_nid || formData.spouse_death_year) && (
            <Card>
              <CardHeader>
                <CardTitle>স্বামী/স্ত্রীর তথ্য / Spouse Information</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="divide-y divide-zinc-200">
                  <DataRow label="স্বামী/স্ত্রীর নাম / Spouse Name" value={formData.spouse_name} />
                  <DataRow label="স্বামী/স্ত্রীর NID / Spouse NID" value={formData.spouse_nid} />
                  <DataRow label="মৃত্যু বছর / Death Year" value={formData.spouse_death_year} />
                </dl>
              </CardContent>
            </Card>
          )}

          {/* Present Address */}
          {(formData.pr_house || formData.pr_village || formData.pr_mouza || formData.pr_post_office ||
            formData.pr_post_code || formData.pr_ward || formData.pr_rmo || formData.pr_upazila ||
            formData.pr_district || formData.pr_division || formData.pr_city) && (
            <Card>
              <CardHeader>
                <CardTitle>বর্তমান ঠিকানা / Present Address</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="divide-y divide-zinc-200">
                  <DataRow label="বাড়ি/হোল্ডিং / House/Holding" value={formData.pr_house} />
                  <DataRow label="গ্রাম/রাস্তা / Village/Road" value={formData.pr_village} />
                  <DataRow label="মৌজা / Mouza" value={formData.pr_mouza} />
                  <DataRow label="পোস্ট অফিস / Post Office" value={formData.pr_post_office} />
                  <DataRow label="পোস্ট কোড / Post Code" value={formData.pr_post_code} />
                  <DataRow label="ওয়ার্ড নং / Ward No" value={formData.pr_ward} />
                  <DataRow label="আরএমও/ইউনিয়ন / RMO/Union" value={formData.pr_rmo} />
                  <DataRow label="উপজেলা/থানা / Upazila/Thana" value={formData.pr_upazila} />
                  <DataRow label="জেলা / District" value={formData.pr_district} />
                  <DataRow label="বিভাগ / Division" value={formData.pr_division} />
                  <DataRow label="সিটি কর্পোরেশন / City Corporation" value={formData.pr_city} />
                </dl>
              </CardContent>
            </Card>
          )}

          {/* Permanent Address */}
          {(formData.pa_house || formData.pa_village || formData.pa_mouza || formData.pa_post_office ||
            formData.pa_post_code || formData.pa_ward || formData.pa_rmo || formData.pa_upazila ||
            formData.pa_district || formData.pa_division || formData.pa_city) && (
            <Card>
              <CardHeader>
                <CardTitle>স্থায়ী ঠিকানা / Permanent Address</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="divide-y divide-zinc-200">
                  <DataRow label="বাড়ি/হোল্ডিং / House/Holding" value={formData.pa_house} />
                  <DataRow label="গ্রাম/রাস্তা / Village/Road" value={formData.pa_village} />
                  <DataRow label="মৌজা / Mouza" value={formData.pa_mouza} />
                  <DataRow label="পোস্ট অফিস / Post Office" value={formData.pa_post_office} />
                  <DataRow label="পোস্ট কোড / Post Code" value={formData.pa_post_code} />
                  <DataRow label="ওয়ার্ড নং / Ward No" value={formData.pa_ward} />
                  <DataRow label="আরএমও/ইউনিয়ন / RMO/Union" value={formData.pa_rmo} />
                  <DataRow label="উপজেলা/থানা / Upazila/Thana" value={formData.pa_upazila} />
                  <DataRow label="জেলা / District" value={formData.pa_district} />
                  <DataRow label="বিভাগ / Division" value={formData.pa_division} />
                  <DataRow label="সিটি কর্পোরেশন / City Corporation" value={formData.pa_city} />
                </dl>
              </CardContent>
            </Card>
          )}

          {/* Other Information */}
          {(formData.passport || formData.driving_license || formData.tin || formData.reason_for_leftout) && (
            <Card>
              <CardHeader>
                <CardTitle>অন্যান্য তথ্য / Other Information</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="divide-y divide-zinc-200">
                  <DataRow label="পাসপোর্ট নম্বর / Passport Number" value={formData.passport} />
                  <DataRow label="ড্রাইভিং লাইসেন্স / Driving License" value={formData.driving_license} />
                  <DataRow label="টিআইএন / TIN" value={formData.tin} />
                  <DataRow label="বাদ পড়ার কারণ / Reason for Left Out" value={formData.reason_for_leftout} />
                </dl>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 print:hidden">
          <Button onClick={handlePrint} variant="outline" size="lg">
            প্রিন্ট / Print
          </Button>
          <Button onClick={handleNewForm} size="lg">
            নতুন ফরম / New Form
          </Button>
        </div>
      </div>
    </div>
  );
}
