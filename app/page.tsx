"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NIDForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    // Form metadata
    form_number: "",
    voter_area_name: "",
    voter_area_number: "",

    // Personal Information
    name_bengali: "",
    name_english: "",
    d1: "", d2: "", m1: "", m2: "", y1: "", y2: "", y3: "", y4: "",
    birth_place: "",
    birth_reg_no: "",
    gender: "",
    blood_group: "",
    religion: "",
    disability_status: "",
    identification_mark: "",
    education: "",
    profession: "",
    marital_status: "",

    // Contact Information
    mobile_number: "",
    telephone_number: "",

    // Father's Information
    father_name: "",
    father_nid: "",
    father_death_year: "",

    // Mother's Information
    mother_name: "",
    mother_nid: "",
    mother_death_year: "",

    // Spouse Information
    spouse_name: "",
    spouse_nid: "",
    spouse_death_year: "",

    // Present Address
    pr_village: "",
    pr_mouza: "",
    pr_house: "",
    pr_post_office: "",
    pr_post_code: "",
    pr_ward: "",
    pr_rmo: "",
    pr_upazila: "",
    pr_district: "",
    pr_division: "",
    pr_city: "",

    // Permanent Address
    pa_village: "",
    pa_mouza: "",
    pa_house: "",
    pa_post_office: "",
    pa_post_code: "",
    pa_ward: "",
    pa_rmo: "",
    pa_upazila: "",
    pa_district: "",
    pa_division: "",
    pa_city: "",

    // Other Information
    passport: "",
    driving_license: "",
    tin: "",
    reason_for_leftout: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data in sessionStorage to pass to results page
    sessionStorage.setItem("nidFormData", JSON.stringify(formData));
    router.push("/results");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-zinc-900 mb-2">
            জাতীয় পরিচয় পত্র নিবন্ধন ফরম
          </h1>
          <p className="text-xl text-zinc-600">
            National Identity Card Registration Form
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form Metadata */}
          <Card>
            <CardHeader>
              <CardTitle>ফরম তথ্য / Form Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="voter_area_name">ভোটার এলাকার নাম / Voter Area Name</Label>
                <Input
                  id="voter_area_name"
                  name="voter_area_name"
                  value={formData.voter_area_name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="voter_area_number">ভোটার এলাকার নম্বর / Voter Area Number</Label>
                <Input
                  id="voter_area_number"
                  name="voter_area_number"
                  value={formData.voter_area_number}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>১. ব্যক্তিগত তথ্য / 1. Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name_bengali">নাম (বাংলায়) / Name (in Bengali)</Label>
                  <Input
                    id="name_bengali"
                    name="name_bengali"
                    value={formData.name_bengali}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="name_english">নাম (English বড় অক্ষরে) / Name (in ENGLISH CAPITAL LETTERS)</Label>
                  <Input
                    id="name_english"
                    name="name_english"
                    value={formData.name_english}
                    onChange={handleChange}
                    className="uppercase"
                  />
                </div>
              </div>

              <div>
                <Label>জন্মতারিখ / Date of Birth</Label>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
                  <div>
                    <Label htmlFor="d1" className="text-xs">দিন / Day</Label>
                    <Input
                      id="d1"
                      name="d1"
                      maxLength={1}
                      value={formData.d1}
                      onChange={handleChange}
                      className="text-center"
                    />
                  </div>
                  <div>
                    <Label htmlFor="d2" className="text-xs opacity-0">D</Label>
                    <Input
                      id="d2"
                      name="d2"
                      maxLength={1}
                      value={formData.d2}
                      onChange={handleChange}
                      className="text-center"
                    />
                  </div>
                  <div>
                    <Label htmlFor="m1" className="text-xs">মাস / Month</Label>
                    <Input
                      id="m1"
                      name="m1"
                      maxLength={1}
                      value={formData.m1}
                      onChange={handleChange}
                      className="text-center"
                    />
                  </div>
                  <div>
                    <Label htmlFor="m2" className="text-xs opacity-0">M</Label>
                    <Input
                      id="m2"
                      name="m2"
                      maxLength={1}
                      value={formData.m2}
                      onChange={handleChange}
                      className="text-center"
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="y1" className="text-xs">বছর / Year</Label>
                    <div className="grid grid-cols-4 gap-1">
                      <Input
                        id="y1"
                        name="y1"
                        maxLength={1}
                        value={formData.y1}
                        onChange={handleChange}
                        className="text-center"
                      />
                      <Input
                        id="y2"
                        name="y2"
                        maxLength={1}
                        value={formData.y2}
                        onChange={handleChange}
                        className="text-center"
                      />
                      <Input
                        id="y3"
                        name="y3"
                        maxLength={1}
                        value={formData.y3}
                        onChange={handleChange}
                        className="text-center"
                      />
                      <Input
                        id="y4"
                        name="y4"
                        maxLength={1}
                        value={formData.y4}
                        onChange={handleChange}
                        className="text-center"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="birth_place">জন্মস্থান / Place of Birth</Label>
                  <Input
                    id="birth_place"
                    name="birth_place"
                    value={formData.birth_place}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="birth_reg_no">জন্ম নিবন্ধন নম্বর / Birth Registration Number</Label>
                  <Input
                    id="birth_reg_no"
                    name="birth_reg_no"
                    value={formData.birth_reg_no}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="gender">লিঙ্গ / Gender</Label>
                  <Select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">নির্বাচন করুন / Select</option>
                    <option value="male">পুরুষ / Male</option>
                    <option value="female">মহিলা / Female</option>
                    <option value="other">অন্যান্য / Other</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="blood_group">রক্তের গ্রুপ / Blood Group</Label>
                  <Select
                    id="blood_group"
                    name="blood_group"
                    value={formData.blood_group}
                    onChange={handleChange}
                  >
                    <option value="">নির্বাচন করুন / Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="religion">ধর্ম / Religion</Label>
                  <Select
                    id="religion"
                    name="religion"
                    value={formData.religion}
                    onChange={handleChange}
                  >
                    <option value="">নির্বাচন করুন / Select</option>
                    <option value="islam">ইসলাম / Islam</option>
                    <option value="hinduism">হিন্দু / Hinduism</option>
                    <option value="buddhism">বৌদ্ধ / Buddhism</option>
                    <option value="christianity">খ্রিস্টান / Christianity</option>
                    <option value="other">অন্যান্য / Other</option>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="disability_status">প্রতিবন্ধী অবস্থা / Disability Status</Label>
                  <Select
                    id="disability_status"
                    name="disability_status"
                    value={formData.disability_status}
                    onChange={handleChange}
                  >
                    <option value="">নির্বাচন করুন / Select</option>
                    <option value="no">না / No</option>
                    <option value="yes">হ্যাঁ / Yes</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="marital_status">বৈবাহিক অবস্থা / Marital Status</Label>
                  <Select
                    id="marital_status"
                    name="marital_status"
                    value={formData.marital_status}
                    onChange={handleChange}
                  >
                    <option value="">নির্বাচন করুন / Select</option>
                    <option value="unmarried">অবিবাহিত / Unmarried</option>
                    <option value="married">বিবাহিত / Married</option>
                    <option value="divorced">বিবাহবিচ্ছেদ / Divorced</option>
                    <option value="widowed">বিধবা/বিপত্নীক / Widowed</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="education">শিক্ষাগত যোগ্যতা / Education</Label>
                  <Input
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="profession">পেশা / Profession</Label>
                  <Input
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="identification_mark">পরিচিতি চিহ্ন / Identification Mark</Label>
                  <Input
                    id="identification_mark"
                    name="identification_mark"
                    value={formData.identification_mark}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>যোগাযোগের তথ্য / Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="mobile_number">মোবাইল নম্বর / Mobile Number</Label>
                <Input
                  id="mobile_number"
                  name="mobile_number"
                  type="tel"
                  value={formData.mobile_number}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="telephone_number">টেলিফোন নম্বর / Telephone Number</Label>
                <Input
                  id="telephone_number"
                  name="telephone_number"
                  type="tel"
                  value={formData.telephone_number}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>

          {/* Father's Information */}
          <Card>
            <CardHeader>
              <CardTitle>পিতার তথ্য / Father&apos;s Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="father_name">পিতার নাম / Father&apos;s Name</Label>
                <Input
                  id="father_name"
                  name="father_name"
                  value={formData.father_name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="father_nid">পিতার NID / Father&apos;s NID</Label>
                <Input
                  id="father_nid"
                  name="father_nid"
                  value={formData.father_nid}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="father_death_year">মৃত্যু বছর / Death Year (if applicable)</Label>
                <Input
                  id="father_death_year"
                  name="father_death_year"
                  value={formData.father_death_year}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>

          {/* Mother's Information */}
          <Card>
            <CardHeader>
              <CardTitle>মাতার তথ্য / Mother&apos;s Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="mother_name">মাতার নাম / Mother&apos;s Name</Label>
                <Input
                  id="mother_name"
                  name="mother_name"
                  value={formData.mother_name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="mother_nid">মাতার NID / Mother&apos;s NID</Label>
                <Input
                  id="mother_nid"
                  name="mother_nid"
                  value={formData.mother_nid}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="mother_death_year">মৃত্যু বছর / Death Year (if applicable)</Label>
                <Input
                  id="mother_death_year"
                  name="mother_death_year"
                  value={formData.mother_death_year}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>

          {/* Spouse Information */}
          <Card>
            <CardHeader>
              <CardTitle>স্বামী/স্ত্রীর তথ্য / Spouse Information</CardTitle>
              <CardDescription>যদি প্রযোজ্য হয় / If applicable</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="spouse_name">স্বামী/স্ত্রীর নাম / Spouse Name</Label>
                <Input
                  id="spouse_name"
                  name="spouse_name"
                  value={formData.spouse_name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="spouse_nid">স্বামী/স্ত্রীর NID / Spouse NID</Label>
                <Input
                  id="spouse_nid"
                  name="spouse_nid"
                  value={formData.spouse_nid}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="spouse_death_year">মৃত্যু বছর / Death Year (if applicable)</Label>
                <Input
                  id="spouse_death_year"
                  name="spouse_death_year"
                  value={formData.spouse_death_year}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>

          {/* Present Address */}
          <Card>
            <CardHeader>
              <CardTitle>বর্তমান ঠিকানা / Present Address</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="pr_house">বাড়ি/হোল্ডিং / House/Holding</Label>
                <Input
                  id="pr_house"
                  name="pr_house"
                  value={formData.pr_house}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pr_village">গ্রাম/রাস্তা / Village/Road</Label>
                <Input
                  id="pr_village"
                  name="pr_village"
                  value={formData.pr_village}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pr_mouza">মৌজা / Mouza</Label>
                <Input
                  id="pr_mouza"
                  name="pr_mouza"
                  value={formData.pr_mouza}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pr_post_office">পোস্ট অফিস / Post Office</Label>
                <Input
                  id="pr_post_office"
                  name="pr_post_office"
                  value={formData.pr_post_office}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pr_post_code">পোস্ট কোড / Post Code</Label>
                <Input
                  id="pr_post_code"
                  name="pr_post_code"
                  value={formData.pr_post_code}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pr_ward">ওয়ার্ড নং / Ward No</Label>
                <Input
                  id="pr_ward"
                  name="pr_ward"
                  value={formData.pr_ward}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pr_rmo">আরএমও/ইউনিয়ন / RMO/Union</Label>
                <Input
                  id="pr_rmo"
                  name="pr_rmo"
                  value={formData.pr_rmo}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pr_upazila">উপজেলা/থানা / Upazila/Thana</Label>
                <Input
                  id="pr_upazila"
                  name="pr_upazila"
                  value={formData.pr_upazila}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pr_district">জেলা / District</Label>
                <Input
                  id="pr_district"
                  name="pr_district"
                  value={formData.pr_district}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pr_division">বিভাগ / Division</Label>
                <Input
                  id="pr_division"
                  name="pr_division"
                  value={formData.pr_division}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pr_city">সিটি কর্পোরেশন / City Corporation</Label>
                <Input
                  id="pr_city"
                  name="pr_city"
                  value={formData.pr_city}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>

          {/* Permanent Address */}
          <Card>
            <CardHeader>
              <CardTitle>স্থায়ী ঠিকানা / Permanent Address</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="pa_house">বাড়ি/হোল্ডিং / House/Holding</Label>
                <Input
                  id="pa_house"
                  name="pa_house"
                  value={formData.pa_house}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pa_village">গ্রাম/রাস্তা / Village/Road</Label>
                <Input
                  id="pa_village"
                  name="pa_village"
                  value={formData.pa_village}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pa_mouza">মৌজা / Mouza</Label>
                <Input
                  id="pa_mouza"
                  name="pa_mouza"
                  value={formData.pa_mouza}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pa_post_office">পোস্ট অফিস / Post Office</Label>
                <Input
                  id="pa_post_office"
                  name="pa_post_office"
                  value={formData.pa_post_office}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pa_post_code">পোস্ট কোড / Post Code</Label>
                <Input
                  id="pa_post_code"
                  name="pa_post_code"
                  value={formData.pa_post_code}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pa_ward">ওয়ার্ড নং / Ward No</Label>
                <Input
                  id="pa_ward"
                  name="pa_ward"
                  value={formData.pa_ward}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pa_rmo">আরএমও/ইউনিয়ন / RMO/Union</Label>
                <Input
                  id="pa_rmo"
                  name="pa_rmo"
                  value={formData.pa_rmo}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pa_upazila">উপজেলা/থানা / Upazila/Thana</Label>
                <Input
                  id="pa_upazila"
                  name="pa_upazila"
                  value={formData.pa_upazila}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pa_district">জেলা / District</Label>
                <Input
                  id="pa_district"
                  name="pa_district"
                  value={formData.pa_district}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pa_division">বিভাগ / Division</Label>
                <Input
                  id="pa_division"
                  name="pa_division"
                  value={formData.pa_division}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="pa_city">সিটি কর্পোরেশন / City Corporation</Label>
                <Input
                  id="pa_city"
                  name="pa_city"
                  value={formData.pa_city}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>

          {/* Other Information */}
          <Card>
            <CardHeader>
              <CardTitle>অন্যান্য তথ্য / Other Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="passport">পাসপোর্ট নম্বর / Passport Number</Label>
                <Input
                  id="passport"
                  name="passport"
                  value={formData.passport}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="driving_license">ড্রাইভিং লাইসেন্স / Driving License</Label>
                <Input
                  id="driving_license"
                  name="driving_license"
                  value={formData.driving_license}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="tin">টিআইএন / TIN</Label>
                <Input
                  id="tin"
                  name="tin"
                  value={formData.tin}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="reason_for_leftout">বাদ পড়ার কারণ / Reason for Left Out</Label>
                <Input
                  id="reason_for_leftout"
                  name="reason_for_leftout"
                  value={formData.reason_for_leftout}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center pt-6">
            <Button type="submit" size="lg" className="w-full md:w-auto px-12">
              জমা দিন / Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
