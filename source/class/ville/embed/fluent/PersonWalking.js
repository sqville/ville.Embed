/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonWalking",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M11.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM9 4.5a2.5 2.5 0 1 1 4.04 1.97c.49.2.91.55 1.21 1l.53.8 1.49 1.06a1.75 1.75 0 1 1-2.04 2.84l-1.75-1.25a1.67 1.67 0 0 1-.09-.06l-.01.04.94 1.43c.25.37.4.81.45 1.26l.22 2.5a1.75 1.75 0 0 1-3.48.32l-.21-2.31-.5-.75-1.43 3.55a1.75 1.75 0 0 1-3.24-1.3l1.34-3.35a1.75 1.75 0 0 1-1.7-2.4l1.1-2.75c.21-.52.66-.91 1.2-1.05l1.55-.38c.2-.05.42-.08.63-.08-.16-.33-.25-.7-.25-1.1Zm.32 2.02-2 .5a.75.75 0 0 0-.52.45l-1.1 2.75a.75.75 0 1 0 1.4.56l.86-2.16a.49.49 0 1 1 .9.36l-2.8 6.99a.75.75 0 1 0 1.39.56l1.42-3.55a1 1 0 0 1 1.77-.18l.6.9.04.12.22 2.5a.75.75 0 0 0 1.5-.14l-.23-2.5a1.75 1.75 0 0 0-.28-.8l-.93-1.4a1 1 0 0 1-.1-.9l.38-1.01a.42.42 0 0 1 .74-.09l.3.44c.05.07.1.14.18.19l1.75 1.25a.75.75 0 1 0 .88-1.22l-1.5-1.06a1 1 0 0 1-.24-.26l-.83-1.24a.75.75 0 0 0-.44-.3l-3-.76a.75.75 0 0 0-.36 0Z";
   var pathdfilled = "M11 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-2.52.18c.26-.05.52.07.73.23a2.99 2.99 0 0 0 2.7.45.95.95 0 0 1 .52-.05c.46.11.89.37 1.2.75l1.26 1.5a.5.5 0 0 0 .23.16l1.02.34a1.25 1.25 0 0 1-.78 2.37l-1.5-.5c-.22-.07-.42-.2-.57-.38l-.49-.59a.5.5 0 0 0-.86.17l-.15.44a.5.5 0 0 0 .06.44l1.05 1.6c.2.3.33.66.37 1.03l.22 2.5a1.25 1.25 0 1 1-2.49.22l-.2-2.3a.5.5 0 0 0-.09-.24l-.72-1.1a.5.5 0 0 0-.88.08L7.4 17.25a1.25 1.25 0 1 1-2.3-1L7.96 9.7a.5.5 0 0 0-.58-.69l-.12.03a.25.25 0 0 0-.17.15l-.5 1.13-.01.03-.45.94a1.25 1.25 0 0 1-2.26-1.08l.44-.92.5-1.12a2.75 2.75 0 0 1 1.87-1.56l1.73-.4c.02-.02.05-.02.07-.03Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});