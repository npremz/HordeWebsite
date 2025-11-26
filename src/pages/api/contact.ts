import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) =>
{
	try
	{
		const data = await request.json();
		const { name, email, message, marketing } = data;

		// Validation basique
		if (!name || !email || !message)
		{
			return new Response(JSON.stringify({
				success: false,
				error: 'Tous les champs obligatoires doivent être remplis'
			}), { status: 400 });
		}

		await resend.emails.send({
			from: 'Contact Form <contact@hordeagence.com>',
			to: 'hello@hordeagence.com',
			subject: `Nouveau message de ${name}`,
			html: `
				<h2>Nouveau message depuis le formulaire de contact</h2>
				<p><strong>Nom :</strong> ${name}</p>
				<p><strong>Email :</strong> ${email}</p>
				<p><strong>Message :</strong></p>
				<p>${message.replace(/\n/g, '<br>')}</p>
				<p><strong>Accord marketing :</strong> ${marketing ? 'Oui' : 'Non'}</p>
			`
		});

		return new Response(JSON.stringify({
			success: true,
			message: 'Email envoyé avec succès'
		}), { status: 200 });
	}
	catch (error)
	{
		console.error('Erreur envoi email:', error);
		return new Response(JSON.stringify({
			success: false,
			error: 'Erreur lors de l\'envoi'
		}), { status: 500 });
	}
};
