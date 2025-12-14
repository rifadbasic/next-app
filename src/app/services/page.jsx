import Link from "next/link";
import React from "react";

export default function ServicesPage() {
  const data = [
    {
      _id: "1",
      name: "Web Development",
      image: "https://i.ibb.co/web-development.jpg",
      description:
        "Modern, responsive এবং high-performance ওয়েবসাইট তৈরি করা হয় React, Next.js ও আধুনিক টেকনোলজি ব্যবহার করে।",
    },
    {
      _id: "2",
      name: "UI/UX Design",
      image: "https://i.ibb.co/ui-ux-design.jpg",
      description:
        "User-friendly এবং eye-catching ডিজাইন যা ইউজারের অভিজ্ঞতা আরও স্মুথ ও প্রফেশনাল করে তোলে।",
    },
    {
      _id: "3",
      name: "Backend Development",
      image: "https://i.ibb.co/backend-development.jpg",
      description:
        "Secure এবং scalable backend system তৈরি করা হয় Node.js, Express ও ডাটাবেস ব্যবহার করে।",
    },
    {
      _id: "4",
      name: "API Integration",
      image: "https://i.ibb.co/api-integration.jpg",
      description:
        "Third-party API এবং custom REST API integrate করে অ্যাপ্লিকেশনকে আরও পাওয়ারফুল করা হয়।",
    },
    {
      _id: "5",
      name: "Maintenance & Support",
      image: "https://i.ibb.co/maintenance-support.jpg",
      description:
        "Website নিয়মিত আপডেট, bug fix এবং performance improvement এর জন্য নির্ভরযোগ্য সাপোর্ট।",
    },
  ];

  return (
    <div>
      <p className="text-2xl font-bold">service page</p>

      {data.map((service) => (
        <div className="grid grid-cols-2 p-4" key={service._id}>
          <div>
            <h2>{service.name}</h2>
            <img src={service.image} alt={service.name} />
            <p>{service.description}</p>
            <Link href={`/services/${service._id}`}>Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
