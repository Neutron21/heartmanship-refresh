<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Use TanStack file routes for the home, brand philosophy, learning, courses, and contact sections so each section has a shareable URL and its own metadata.
- Keep document-derived editorial content and course facts in a shared data module so presentation changes do not alter the supplied programs.
- Serve original brand media through imported Lovable Assets pointers to preserve source imagery without storing binaries in the repository.
- Use existing design-system controls and shared site navigation across public pages to maintain accessible, consistent interactions.
