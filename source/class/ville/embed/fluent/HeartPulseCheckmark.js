/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HeartPulseCheckmark",
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

   var pathdregular = "m12.88 8.17.95 1.09c-.34.1-.66.25-.97.41l-.3-.33-.58.93a5.5 5.5 0 0 0-1.76 2.68.5.5 0 0 1-.68-.26L7.5 7.8l-1.24 2.9a.5.5 0 0 1-.46.31H2.5a.5.5 0 0 1 0-1h2.97l1.57-3.7a.5.5 0 0 1 .92 0l2.13 5.11 1.99-3.18a.5.5 0 0 1 .8-.06Zm3.84-3.86a4.42 4.42 0 0 1 .98 4.7L17.5 9h-.89c.67-1.28.48-2.9-.6-3.98A3.3 3.3 0 0 0 11.3 5l-.95.96a.5.5 0 0 1-.71 0L8.68 5a3.3 3.3 0 0 0-4.7-.01A3.4 3.4 0 0 0 3.41 9H2.5l-.18.01a4.4 4.4 0 0 1 .94-4.74 4.3 4.3 0 0 1 6.13.02l.6.61.6-.6.1-.1a4.3 4.3 0 0 1 6.03.11ZM4.86 12l4.78 4.85a.5.5 0 0 0 .71-.7l-4.14-4.2a1.5 1.5 0 0 1-.41.05h-.94ZM20 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z";
   var pathdfilled = "M9.39 4.29a4.3 4.3 0 0 0-6.13-.02 4.4 4.4 0 0 0-.94 4.74L2.5 9h2.3l1.32-3.09a1.5 1.5 0 0 1 2.76.01l1.39 3.32.96-1.54a1.5 1.5 0 0 1 2.4-.19L14.93 9h2.57l.2.01c.61-1.57.29-3.42-.98-4.7a4.3 4.3 0 0 0-6.13-.01l-.6.6-.6-.61Zm3.49 3.88.95 1.09c-.34.1-.66.25-.97.41l-.3-.33-.58.93a5.5 5.5 0 0 0-1.76 2.68.5.5 0 0 1-.68-.26L7.5 7.8l-1.24 2.9a.5.5 0 0 1-.46.31H2.5a.5.5 0 0 1 0-1h2.97l1.57-3.7a.5.5 0 0 1 .92 0l2.13 5.11 1.99-3.18a.5.5 0 0 1 .8-.06Zm-3 5.82.14.01a5.59 5.59 0 0 0 .48 2.8.66.66 0 0 1-.95 0L4.8 12h1c.6 0 1.15-.36 1.38-.91l.3-.72 1.14 2.7c.21.52.7.88 1.26.92ZM20 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z";
   
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