"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Edit } from "lucide-react";

const UpdateProfile = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      console.log(error);
      return;
    }

    window.location.reload();
  };

  return (
    <Modal>
      <Button className="bg-[#14532D] text-white" radius="full">
        <Edit className="w-4 h-4 mr-2" />
        Update Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-green-100 text-[#14532D]">
                <Edit className="size-5" />
              </Modal.Icon>

              <Modal.Heading>Update Profile</Modal.Heading>

              <p className="mt-1.5 text-sm text-muted">
                Update your personal information and profile picture.
              </p>
            </Modal.Header>

            <Modal.Body className="">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Full Name</Label>
                    <Input placeholder="Enter your full name" />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="image"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Profile Photo URL</Label>
                    <Input placeholder="Enter profile photo URL" />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      slot="close"
                      className="bg-[#14532D] text-white"
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateProfile;
