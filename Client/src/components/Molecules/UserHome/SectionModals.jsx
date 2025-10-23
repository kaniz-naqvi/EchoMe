import React, { useState, useEffect } from "react";
import Modal from "@/components/Atoms/Modals/Modal";
import ConfirmationModal from "@/components/Atoms/Modals/ConfirmationModal";
import InputComponent from "@/components/Atoms/Shared/Input";
import Textarea from "@/components/Atoms/Shared/Textarea";

export const AddSectionModal = ({
  isOpen,
  onClose,
  onConfirm,
  sectionKey,
  theme,
  editData = null,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    institution: "",
    duration: "",
  });

  // Initialize form data when modal opens or editData changes
  useEffect(() => {
    if (isOpen) {
      setFormData({
        title: editData?.title || "",
        description: editData?.description || "",
        institution: editData?.institution || "",
        duration: editData?.duration || "",
      });
    }
  }, [isOpen, editData]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleConfirm = () => {
    onConfirm(formData);
    setFormData({
      title: "",
      description: "",
      institution: "",
      duration: "",
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setFormData({
          title: "",
          description: "",
          institution: "",
          duration: "",
        });
      }}
      title={
        editData ? `Edit ${sectionKey}` : `Add to ${sectionKey || "Sections"}`
      }
      confirmText={editData ? "Update" : "Add"}
      onConfirm={handleConfirm}
    >
      <div className="space-y-4 py-4">
        <InputComponent
          label="Title"
          required
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          placeholder="Enter title"
        />
        <InputComponent
          label="Institution/Organization"
          value={formData.institution}
          onChange={(e) => handleInputChange("institution", e.target.value)}
          placeholder="Enter institution"
        />
        <InputComponent
          label="Duration"
          value={formData.duration}
          onChange={(e) => handleInputChange("duration", e.target.value)}
          placeholder="e.g., 2020 - 2023"
        />
        <Textarea
          label="Description"
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          placeholder="Enter description..."
        />
      </div>
    </Modal>
  );
};

export const DeleteConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  itemName = "item",
}) => {
  return (
    <ConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      title="Delete Confirmation"
      message={`delete this ${itemName} item`}
    />
  );
};
