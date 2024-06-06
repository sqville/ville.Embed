/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Call",
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

   var pathdregular = "m6.99 2.07-.72.21a3.5 3.5 0 0 0-2.45 2.86c-.3 2.06.36 4.48 1.96 7.25 1.6 2.77 3.36 4.55 5.3 5.33a3.5 3.5 0 0 0 3.7-.7l.55-.52a2 2 0 0 0 .25-2.62L14.22 12a1.5 1.5 0 0 0-1.65-.56l-2.05.63-.06.01c-.22.04-.74-.45-1.4-1.58-.67-1.18-.82-1.87-.63-2.04l1.05-.98a2.5 2.5 0 0 0 .57-2.85l-.66-1.47a2 2 0 0 0-2.4-1.1Zm1.49 1.5.66 1.47a1.5 1.5 0 0 1-.35 1.71l-1.04.98c-.67.63-.45 1.71.45 3.27.85 1.47 1.62 2.19 2.45 2.06l.12-.02 2.09-.64a.5.5 0 0 1 .55.19l1.36 1.88a1 1 0 0 1-.13 1.3l-.54.52a2.5 2.5 0 0 1-2.65.5c-1.7-.68-3.3-2.3-4.8-4.9-1.5-2.59-2.1-4.8-1.84-6.61a2.5 2.5 0 0 1 1.75-2.04l.72-.22a1 1 0 0 1 1.2.55Z";
   var pathdfilled = "M6.99 2.07A2 2 0 0 1 9.3 3l.08.15.66 1.47a2.5 2.5 0 0 1-.44 2.72l-.13.13-1.05.98c-.19.17-.04.86.64 2.04.6 1.06 1.1 1.56 1.35 1.58h.1l2.05-.64a1.5 1.5 0 0 1 1.56.45l.1.11 1.35 1.88a2 2 0 0 1-.13 2.5l-.12.12-.54.52a3.5 3.5 0 0 1-3.72.7c-1.93-.78-3.69-2.56-5.29-5.33S3.52 7.2 3.82 5.14a3.5 3.5 0 0 1 2.26-2.8l.19-.06.72-.21Z";
   
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